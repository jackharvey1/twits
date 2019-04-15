const fs = require('fs');
const { promisify } = require('util');

const { getCorpus } = require('./lib/twitter');
const { createChain } = require('./lib/markov');

const writeFile = promisify(fs.writeFile);

const userFlagIndex = process.argv.findIndex(arg => arg === '--user');
const user = process.argv[userFlagIndex + 1];
const orderFlagIndex = process.argv.findIndex(arg => arg === '--order');
const order = Number(process.argv[orderFlagIndex + 1]);

(async function () {
    if (!user || !order) {
        throw new Error('User or order not specified');
    }

    const corpus = await getCorpus(user);
    const chain = createChain(corpus, order);
    // eslint-disable-next-line no-sync
    await writeFile(`${__dirname}/chains/${user}.json`, JSON.stringify(chain, null, 4));
})();
