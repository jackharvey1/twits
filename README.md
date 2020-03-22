# twits

**In development**

[Kanban board](https://www.notion.so/jackharvey/bfdeae9e19884e7c87852453c07ca4bd?v=d696dfc0661f4b7f87a24fada774fa60)

## Background

This is a project which uses Markov chains to generate original text. The chain
is built using tweets as a corpus. It's possible to specify what order Markov
chain text generation will utilise.

N.B. Twitter only allows us to fetch 3200 tweets. This limits the corpus, and
therefore it's possible that the current node will repeatedly only have 1
possible vector, resulting in non-original text, i.e. duplication of a
sentence from an ingested tweet. 

## Usage

### Setup

In order to create chains yourself, you will need Twitter credentials. You can
request these by following the steps outlined on the [developer
documentation](https://developer.twitter.com/). 

Once this request has been accepted, do the following the find your API keys
1. Hover over your user's handle and select "Apps"
2. Select "Details" against your app 
3. Navigate to the "Keys and tokens" tab

When you have these, place them in a file named `.credentials` in the root of
the project, and they will be automatically picked up. The file is of the form:

```sh
export API_KEY=XXXX
export API_SECRET_KEY=XXXX
```

### Commands

`yarn chain [--user user]`

Writes three JSON files, for orders 2, 3 & 4. User flag should correspond to a
Twitter handle. 

`yarn generate [--user user] [--order order]`

Outputs text based off of the user's chain of the specified order. 
