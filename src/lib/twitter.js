const request = require('axios');
const { log } = require('../helpers/log');

const host = 'api.twitter.com';
const apiKey = process.env.API_KEY;
const apiSecretKey = process.env.API_SECRET_KEY;

const getCorpus = user =>
    getBearerToken()
        .then(({ access_token: bearer }) => getStream(user, bearer))
        .then(concatenateTweets)
        .catch(log);

const concatenateTweets = tweets =>
    tweets.map(tweet => tweet.full_text.replace('\n', ' ')).join(' ');

function getBearerToken () {
    const path = 'oauth2/token';
    const queryString = 'grant_type=client_credentials';
    const options = {
        url: `https://${host}/${path}?${queryString}`,
        method: 'POST',
        auth: {
            username: apiKey,
            password: apiSecretKey,
        },
    };

    log('[TWITTER] Fetching bearer token with options');

    return wrappedRequest(options);
}

function getStream (user, bearer) {
    const path = '1.1/statuses/user_timeline.json';
    const queryString = `screen_name=${user}&count=3200&tweet_mode=extended`;
    const options = {
        url: `https://${host}/${path}?${queryString}`,
        headers: {
            Authorization: `Bearer ${bearer}`,
        },
    };

    log('[TWITTER] Fetching stream with options');

    return wrappedRequest(options);
}

const wrappedRequest = options =>
    request(options)
        .then(({ data }) => data)
        .catch(error => {
            log(error);
            process.exit(1);
        });

module.exports = {
    getBearerToken,
    getStream,
    getCorpus,
};
