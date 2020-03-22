const request = require('axios');
const queryString = require('querystring');
const { log, logInPlace } = require('../helpers/log');

const host = 'api.twitter.com';
const apiKey = process.env.API_KEY;
const apiSecretKey = process.env.API_SECRET_KEY;
const pageSize = 200;
const maxTweets = 3200;
const maxPage = maxTweets / pageSize;

const getCorpus = user =>
    getBearerToken()
        .then(({ access_token: bearer }) => getStream(user, bearer))
        .then(concatenateTweets)
        .catch(log);

const concatenateTweets = tweets =>
    tweets.map(tweet => tweet.full_text.replace('\n', ' ')).join(' ');

function getBearerToken () {
    if (!apiKey || !apiSecretKey) {
        throw new Error('Missing API credentials');
    }

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

function getStream (user, bearer, page = 1, maxId) {
    const path = '1.1/statuses/user_timeline.json';
    const baseQueryObject = {
        'screen_name': user,
        'tweet_mode': 'extended',
        'trim_user': 1,
        count: pageSize,
    };
    const queryObject = maxId
        ? { ...baseQueryObject, 'max_id': maxId }
        : baseQueryObject;
    const options = {
        url: `https://${host}/${path}?${queryString.stringify(queryObject)}`,
        headers: {
            Authorization: `Bearer ${bearer}`,
        },
    };

    logInPlace(`[TWITTER] Fetching stream with options (page ${page} of ${maxPage})`);

    return page === maxPage
        ? wrappedRequest(options)
        : wrappedRequest(options).then(async response => {
            const nextMaxId = response[response.length - 1].id;
            return [
                ...response,
                ...(await getStream(user, bearer, page + 1, nextMaxId)),
            ];
        });
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
