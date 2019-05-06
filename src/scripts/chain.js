const fs = require('fs');
const { promisify } = require('util');
const { resolve } = require('path');

const { getCorpus } = require('../lib/twitter');
const { createChain } = require('../lib/markov');
const { orders } = require('../consts');

const writeFile = promisify(fs.writeFile);

const userFlagIndex = process.argv.findIndex(arg => arg === '--user');
const user = process.argv[userFlagIndex + 1];

(async function () {
    if (!user) {
        throw new Error('User not specified');
    }

    const corpus = await getCorpus(user);

    const chainGenerators = orders.map(order => createChain(corpus, order));

    const chains = await chainGenerators;

    const writePath = resolve(`${__dirname}/../chains`);

    const fileWrites = chains.map((chain, i) =>
        writeFile(`${writePath}/${user}-order${i + 2}.json`, JSON.stringify(chain, null, 4))
    );

    await fileWrites;
})();
