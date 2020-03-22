const { getBearerToken, createTweet } = require('../lib/twitter');
const { createChain } = require('../lib/markov');
const { log, linebreak } = require('../helpers/log');
const { generator } = require('../lib/generator');

const userFlagIndex = process.argv.findIndex(arg => arg === '--user');
const user = process.argv[userFlagIndex + 1];
const orderFlagIndex = process.argv.findIndex(arg => arg === '--order');
const order = Number(process.argv[orderFlagIndex + 1]);

(async function () {
    const bearer = await getBearerToken();
    const tweet = await generator(user, order);
    log(tweet);
    await createTweet(tweet, bearer);
})();
