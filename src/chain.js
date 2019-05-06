const fs = require('fs');
const { promisify } = require('util');

const { getCorpus } = require('./lib/twitter');
const { createChain } = require('./lib/markov');

const writeFile = promisify(fs.writeFile);

const userFlagIndex = process.argv.findIndex(arg => arg === '--user');
const user = process.argv[userFlagIndex + 1];
const orders = [2, 3, 4];

(async function () {
    if (!user) {
        throw new Error('User not specified');
    }

    const corpus = await getCorpus(user);

    const chainGenerators = orders.map(order => createChain(corpus, order));

    const chains = await chainGenerators;

    const fileWrites = chains.map((chain, i) =>
        writeFile(`${__dirname}/chains/${user}-order${i + 2}.json`, JSON.stringify(chain, null, 4))
    );

    await fileWrites;
})();
