const { logInPlace } = require('../helpers/log');

const EOLToken = '%EOL%';
const totalToken = '%total%';

function createChain (corpus, order) {
    logInPlace('[MARKOV] Creating n-grams');
    const ngrams = createNGrams(corpus, order);

    const chainWithCounts = createChainWithCounts(ngrams);

    return countsToPercentiles(chainWithCounts);
}

const countsToPercentiles = chainWithCounts => {
    const entries = Object.entries(chainWithCounts);
    const [firstEntry] = entries;
    const nextLevelIsLeaf = typeof firstEntry[1] !== 'object';

    if (nextLevelIsLeaf) {
        const [, total] = entries.find(([key]) => key === totalToken);
        const { percentiles } = entries.reduce(({ currentPercentile, percentiles }, [key, value]) => {

            const nextPercentile = key === totalToken
                ? currentPercentile
                : currentPercentile + (value / total);

            return {
                percentiles: {
                    ...percentiles,
                    [key]: key === totalToken ? value : nextPercentile,
                },
                currentPercentile: nextPercentile,
            };
        }, { currentPercentile: 0, percentiles: {} });

        return percentiles;
    }

    return entries.reduce((currentPath, [key, value]) => ({
        ...currentPath,
        [key]: countsToPercentiles(value),
    }), {});
};

function updateCount(ngram, countsPath) {
    for (let i = 0; i < ngram.length; i++) {
        const remainingPath = ngram.slice(i);
        const currentToken = remainingPath[0];

        if (remainingPath.length === 1) {
            return {
                ...countsPath,
                [currentToken]: (countsPath[currentToken] || 0) + 1,
                '%total%': (countsPath['%total%'] || 0) + 1,
            };
        }

        const nextPath = remainingPath.slice(i + 1);

        return {
            ...countsPath,
            [currentToken]: updateCount(nextPath, countsPath[currentToken] || {}),
        };
    }
}

const createChainWithCounts = ngrams =>
    ngrams.reduce((accumulator, ngram, i) => {
        const progress = Math.round((i / ngrams.length) * 100);
        logInPlace(`[MARKOV] <${progress}%> Creating chain with counts`, i);

        return {
            ...accumulator,
            ...updateCount(ngram, accumulator),
        };
    }, {});

const createNGrams = (corpus, n) => corpus
    .replace(/(\.|^|$)/g, ` ${EOLToken} `)
    .split(/\s+/)
    .filter(Boolean)
    .map((_, i, words) => words.slice(i, i + n))
    .filter(ngram => ngram.length >= n);

module.exports = {
    createChain,
    countsToPercentiles,
    createChainWithCounts,
    createNGrams,
};