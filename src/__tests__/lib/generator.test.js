const { generator, readChains, generateInitialWords } = require('../../lib/generator');
const {
    deterministicOrder2Chain,
    deterministicOrder3Chain,
    deterministicOrder4Chain,
} = require('./manifests');

const mockDeterministicChains = {
    2: deterministicOrder2Chain,
    3: deterministicOrder3Chain,
    4: deterministicOrder4Chain,
};

jest.mock('util', () => ({
    promisify: () => path => {
        const [, order] = path.match(/order(\d).json$/);
        return JSON.stringify(mockDeterministicChains[order]);
    },
}));

const deterministicCorpus = 'This is an entirely unique sentence without any repeating chunks. ';

describe('Generator', () => {
    describe('Deterministic chains', () => {
        it('returns a catalogue of chains when reading in files', () => {
            expect(readChains('test', [2, 3, 4])).resolves.toEqual(mockDeterministicChains);
        });

        describe('generating  words', () => {
            it('generates for order-2', () => {
                expect(
                    generateInitialWords(mockDeterministicChains, [2])
                ).toEqual(['This']);
            });

            it('generates for order-3', () => {
                expect(
                    generateInitialWords(mockDeterministicChains, [2, 3])
                ).toEqual(['This', 'is']);
            });

            it('generates for order-4', () => {
                expect(
                    generateInitialWords(mockDeterministicChains, [2, 3, 4])
                ).toEqual(['This', 'is', 'an']);
            });
        });

        describe('Completing text generation', () => {
            it('completes a full tweet from order-2', () => {
                return expect(generator('test', 2)).resolves.toEqual(deterministicCorpus);
            });

            it('completes a full tweet from order-3', () => {
                return expect(generator('test', 3)).resolves.toEqual(deterministicCorpus);
            });

            it('completes a full tweet from order-4', () => {
                return expect(generator('test', 4)).resolves.toEqual(deterministicCorpus);
            });

            it('does not get stuck if generated percentile is not found', async () => {
                const originalMath = global.Math;
                const mockCeil = jest.fn().mockReturnValue(-1).mockReturnValue(1);
                global.Math = {
                    ceil: mockCeil,
                    random: jest.fn(),
                    round: jest.fn(),
                };
                await expect(generator('test', 4)).resolves.toEqual(deterministicCorpus);
                // eslint-disable-next-line require-atomic-updates
                global.Math = originalMath;
            });
        });
    });
});
