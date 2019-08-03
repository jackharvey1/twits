const fs = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');
const { lowestOrder, EOLToken, totalToken } = require('../consts');

const readFile = promisify(fs.readFile);

const CHARACTER_LIMIT = 280;

async function generator(user, order) {
    if (!user) {
        throw new Error('User not specified');
    }

    const orders = [...Array(order + 1)]
        .map((_, i) => i)
        .filter(order => order >= lowestOrder);

    const chains = await readChains(user, orders);

    const initialWords = generateInitialWords(chains, orders);

    return completeTextGeneration(chains[order], initialWords, order);
}

function readChains(user, orders) {
    const readPath = resolve(`${__dirname}/../chains`);
    const fileReads = orders.map(order => readFile(`${readPath}/${user}-order${order}.json`, 'utf8'));

    return Promise.all(fileReads)
        .then(chains => chains.reduce((chainCatalogue, chain, i) => ({
            ...chainCatalogue,
            [i + lowestOrder]: JSON.parse(chain),
        }), {}));
}

function completeTextGeneration(chain, text, order) {
    const relevantHistory = text.slice((-1 * order) + 1);
    const chainLeaf = getChainLeaf(chain, relevantHistory);

    if (!chainLeaf) {
        return text;
    }

    const nextWord = selectNextWord(chainLeaf);

    const nextSentence = [
        ...text,
        nextWord,
    ];

    if (nextWord === EOLToken) {
        const tweet = nextSentence.join(' ');
        if (tweet.length > CHARACTER_LIMIT) {
            const initialWords = nextSentence.slice(0, order - 1);
            return completeTextGeneration(chain, initialWords, order);
        }

        const EOLRegex = new RegExp(` ${EOLToken}\\s?`, 'g');

        return text
            .concat(`${EOLToken} `)
            .join(' ')
            .replace(EOLRegex, '. ');
    }

    return completeTextGeneration(chain, nextSentence, order);
}

const generateInitialWords = (chains, orders) =>
    orders
        .reduce((path, order) => {
            const chain = chains[order];
            const chainLeaf = getChainLeaf(chain[EOLToken], path);

            return [
                ...path,
                selectNextWord(chainLeaf),
            ];
        }, []);

const getChainLeaf = (chain, path) =>
    path.reduce((accumulator, word) =>
        accumulator ? accumulator[word] : null
    , chain);

function selectNextWord(chainLeaf) {
    const total = chainLeaf[totalToken];
    const percentile = Math.ceil(Math.random() * total) / total;

    const nextWord = Object.entries(chainLeaf).find(([key, value]) =>
        key !== totalToken && value === percentile
    );

    // if percentile is not an exact match (i.e. percentiles in the chain can
    // jump more than 1 / total if it occurs more than once) then we must try
    // again with a new percentile
    return nextWord ? nextWord[0] : selectNextWord(chainLeaf);
}

module.exports = {
    generator,
    completeTextGeneration,
    readChains,
    generateInitialWords,
};
