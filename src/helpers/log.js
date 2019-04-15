function log(text) {
    const timestamp = new Date().toISOString();
    console.log(`(${timestamp}) ${text}`);
}

function logInPlace(text, index) {
    const prefix = index === 0 ? '\n' : '';
    const timestamp = new Date().toISOString();
    process.stdout.write(prefix);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`(${timestamp}) ${text}`);
}

module.exports = {
    log,
    logInPlace,
};
