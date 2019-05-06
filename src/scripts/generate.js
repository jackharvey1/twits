const { generator } = require('../lib/generator');
const { log } = require('../helpers/log');

const userFlagIndex = process.argv.findIndex(arg => arg === '--user');
const user = process.argv[userFlagIndex + 1];
const orderFlagIndex = process.argv.findIndex(arg => arg === '--order');
const order = Number(process.argv[orderFlagIndex + 1]);

(async function () {
    if (!user || !order) {
        throw new Error('User or order not defined');
    }

    const generatedText = await generator(user, order);
    log(generatedText);
    return generatedText;
})();
