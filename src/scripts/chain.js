const fs = require('fs');
const { promisify } = require('util');
const { resolve } = require('path');

const { getCorpus } = require('../lib/twitter');
const { createChain } = require('../lib/markov');
const { linebreak } = require('../helpers/log');
const { orders } = require('../consts');

const writeFile = promisify(fs.writeFile);

const userFlagIndex = process.argv.findIndex(arg => arg === '--user');
const user = process.argv[userFlagIndex + 1];

(async function () {
    if (userFlagIndex === -1 || !user) {
        throw new Error('User not specified');
    }

    const writePath = resolve(`${__dirname}/../chains`);
    const corpus = await getCorpus(user);

    linebreak();

    for (const order of orders) {
        const chain = createChain(corpus, order);
        await writeFile(`${writePath}/${user}-order${order}.json`, JSON.stringify(chain, null, 4));
    }
})();
