const nock = require('nock');

const { getCorpus, getBearerToken, getStream } = require('../../lib/twitter');

describe('chain', () => {
    it('fetches the corpus and concatenates it', () => {
        nock('https://api.twitter.com')
            .post('/oauth2/token')
            .query(true)
            .reply(200, JSON.stringify({
                'access_token': 'XXXXXX',
            }))
            .get('/1.1/statuses/user_timeline.json')
            .query(true)
            .reply(200, JSON.stringify([
                {
                    'full_text': 'tweet',
                }, {
                    'full_text': 'twoot.',
                }, {
                    'full_text': 'tweet',
                },
            ]));

        expect(getCorpus('twitter_user')).resolves.toEqual('tweet twoot. tweet');
    });

    it('throws an error when fetching bearer token fails', () => {
        nock('https://api.twitter.com')
            .post('/oauth2/token')
            .query(true)
            .reply(400, JSON.stringify({ error: 'Bad request' }));

        expect(getBearerToken()).rejects.toThrow();
    });

    it('throws an error when fetching stream fails', () => {
        nock('https://api.twitter.com')
            .get('/1.1/statuses/user_timeline.json')
            .query(true)
            .reply(400, JSON.stringify({ error: 'Bad request' }));

        expect(getStream('twitter_user', 'XXXX')).rejects.toThrow();
    });
});
