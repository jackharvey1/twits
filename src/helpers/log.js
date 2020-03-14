function log(text, newline) {
    const timestamp = new Date().toISOString();
    // eslint-disable-next-line no-console
    console.log(`${newline ? '\n' : ''}(${timestamp}) ${text}`);
}

function logInPlace(text, index) {
    const prefix = index === 0 ? '\n' : '';
    const timestamp = new Date().toISOString();
    process.stdout.write(prefix);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${timestamp}) ${text}`);
}

function linebreak() {
    // eslint-disable-next-line no-console
    console.log('');
}

module.exports = {
    log,
    logInPlace,
    linebreak,
};
