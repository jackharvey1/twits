const {
    createChain,
    createNGrams,
    createChainWithCounts,
    countsToPercentiles,
} = require('../../lib/markov');

const {
    order2Counts,
    order2Percentiles,
    complexOrder2Percentiles,
    order3Counts,
    order3Percentiles,
    complexOrder3Percentiles,
    order4Counts,
    order4Percentiles,
    complexOrder4Percentiles,
    bigrams,
    trigrams,
    quadgrams,
} = require('./manifests');

const basicString = 'one two three four five';
const complexString = 'one two three one two. three four five. two two three one two.';

describe('markov', () => {
    describe('edge cases', () => {
        it('decodes &amp; to &', () => {
            expect(createNGrams('&amp;', 2)).toEqual([['%EOL%', '&'], ['&', '%EOL%']]);
        });
    });

    describe('bigrams', () => {
        it('creates a list of bigrams', () => {
            expect(createNGrams(basicString, 2)).toEqual(bigrams);
        });

        it('converts counts to percentiles', () =>
            expect(countsToPercentiles(order2Counts)).toEqual(order2Percentiles)
        );

        it('generates a small markov chain with counts as JSON', () =>
            expect(createChainWithCounts(bigrams)).toEqual(order2Counts)
        );

        it('generates a small markov chain as JSON', () =>
            expect(createChain(basicString, 2)).toEqual(order2Percentiles)
        );

        it('generates a small markov chain with <1 percentiles', () => {
            expect(createChain(complexString, 2)).toEqual(complexOrder2Percentiles);
        });
    });

    describe('trigrams', () => {
        it('creates a list of trigrams with lists of size 1 trimmed', () => {
            expect(createNGrams(basicString, 3)).toEqual(trigrams);
        });

        it('converts counts to percentiles', () =>
            expect(countsToPercentiles(order3Counts)).toEqual(order3Percentiles)
        );

        it('generates a small markov chain with counts as JSON', () =>
            expect(createChainWithCounts(trigrams)).toEqual(order3Counts)
        );

        it('generates a small markov chain as JSON', () =>
            expect(createChain(basicString, 3)).toEqual(order3Percentiles)
        );

        it('generates a small markov chain with <1 percentiles', () => {
            expect(createChain(complexString, 3)).toEqual(complexOrder3Percentiles);
        });
    });

    describe('4-grams', () => {
        it('creates a list of 4-grams with lists of size 2 trimmed', () => {
            expect(createNGrams(basicString, 4)).toEqual(quadgrams);
        });

        it('converts counts to percentiles', () =>
            expect(countsToPercentiles(order4Counts)).toEqual(order4Percentiles)
        );

        it('generates a small markov chain with counts as JSON', () =>
            expect(createChainWithCounts(quadgrams)).toEqual(order4Counts)
        );

        it('generates a small markov chain as JSON', () =>
            expect(createChain(basicString, 4)).toEqual(order4Percentiles)
        );

        it('generates a small markov chain with <1 percentiles', () => {
            expect(createChain(complexString, 4)).toEqual(complexOrder4Percentiles);
        });
    });
});
