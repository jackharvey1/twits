const { EOLToken, totalToken } = require('../../consts');

module.exports.order2Counts = {
    [EOLToken]: {
        [totalToken]: 1,
        one: 1,
    },
    one: {
        [totalToken]: 1,
        two: 1,
    },
    two: {
        [totalToken]: 1,
        three: 1,
    },
    three: {
        [totalToken]: 1,
        four: 1,
    },
    four: {
        [totalToken]: 1,
        five: 1,
    },
    five: {
        [totalToken]: 1,
        [EOLToken]: 1,
    },
};

module.exports.order2Percentiles = {
    [EOLToken]: {
        [totalToken]: 1,
        one: 1,
    },
    one: {
        [totalToken]: 1,
        two: 1,
    },
    two: {
        [totalToken]: 1,
        three: 1,
    },
    three: {
        [totalToken]: 1,
        four: 1,
    },
    four: {
        [totalToken]: 1,
        five: 1,
    },
    five: {
        [totalToken]: 1,
        [EOLToken]: 1,
    },
};

module.exports.complexOrder2Percentiles = {
    [EOLToken]: {
        [EOLToken]: 1,
        [totalToken]: 4,
        'one': 0.25,
        'three': 0.5,
        'two': 0.75,
    },
    'five': {
        [EOLToken]: 1,
        [totalToken]: 1,
    },
    'four': {
        [totalToken]: 1,
        'five': 1,
    },
    'one': {
        [totalToken]: 3,
        'two': 1,
    },
    'three': {
        [totalToken]: 3,
        'four': 1,
        'one': 0.6666666666666666,
    },
    'two': {
        [EOLToken]: 0.8,
        [totalToken]: 5,
        'three': 0.4,
        'two': 1,
    },
};

module.exports.order3Counts = {
    [EOLToken]: {
        one: {
            [totalToken]: 1,
            two: 1,
        },
    },
    one: {
        two: {
            [totalToken]: 1,
            three: 1,
        },
    },
    two: {
        three: {
            [totalToken]: 1,
            four: 1,
        },
    },
    three: {
        four: {
            [totalToken]: 1,
            five: 1,
        },
    },
    four: {
        five: {
            [totalToken]: 1,
            [EOLToken]: 1,
        },
    },
};

module.exports.order3Percentiles = {
    [EOLToken]: {
        one: {
            [totalToken]: 1,
            two: 1,
        },
    },
    one: {
        two: {
            [totalToken]: 1,
            three: 1,
        },
    },
    two: {
        three: {
            [totalToken]: 1,
            four: 1,
        },
    },
    three: {
        four: {
            [totalToken]: 1,
            five: 1,
        },
    },
    four: {
        five: {
            [totalToken]: 1,
            [EOLToken]: 1,
        },
    },
};

module.exports.complexOrder3Percentiles = {
    [EOLToken]: {
        'one': {
            [totalToken]: 1,
            'two': 1,
        },
        'three': {
            [totalToken]: 1,
            'four': 1,
        },
        'two': {
            [totalToken]: 1,
            'two': 1,
        },
    },
    'five': {
        [EOLToken]: {
            [totalToken]: 1,
            'two': 1,
        },
    },
    'four': {
        'five': {
            [EOLToken]: 1,
            [totalToken]: 1,
        },
    },
    'one': {
        'two': {
            [EOLToken]: 1,
            [totalToken]: 3,
            'three': 0.3333333333333333,
        },
    },
    'three': {
        'four': {
            [totalToken]: 1,
            'five': 1,
        },
        'one': {
            [totalToken]: 2,
            'two': 1,
        },
    },
    'two': {
        [EOLToken]: {
            [EOLToken]: 1,
            [totalToken]: 2,
            'three': 0.5,
        },
        'three': {
            [totalToken]: 2,
            'one': 1,
        },
        'two': {
            [totalToken]: 1,
            'three': 1,
        },
    },
};

module.exports.order4Counts = {
    [EOLToken]: {
        one: {
            two: {
                [totalToken]: 1,
                three: 1,
            },
        },
    },
    one: {
        two: {
            three: {
                [totalToken]: 1,
                four: 1,
            },
        },
    },
    two: {
        three: {
            four: {
                [totalToken]: 1,
                five: 1,
            },
        },
    },
    three: {
        four: {
            five: {
                [totalToken]: 1,
                [EOLToken]: 1,
            },
        },
    },
};

module.exports.order4Percentiles = {
    [EOLToken]: {
        one: {
            two: {
                [totalToken]: 1,
                three: 1,
            },
        },
    },
    one: {
        two: {
            three: {
                [totalToken]: 1,
                four: 1,
            },
        },
    },
    two: {
        three: {
            four: {
                [totalToken]: 1,
                five: 1,
            },
        },
    },
    three: {
        four: {
            five: {
                [totalToken]: 1,
                [EOLToken]: 1,
            },
        },
    },
};

module.exports.complexOrder4Percentiles = {
    [EOLToken]: {
        'one': {
            'two': {
                [totalToken]: 1,
                'three': 1,
            },
        },
        'three': {
            'four': {
                [totalToken]: 1,
                'five': 1,
            },
        },
        'two': {
            'two': {
                [totalToken]: 1,
                'three': 1,
            },
        },
    },
    'five': {
        [EOLToken]: {
            'two': {
                [totalToken]: 1,
                'two': 1,
            },
        },
    },
    'four': {
        'five': {
            [EOLToken]: {
                [totalToken]: 1,
                'two': 1,
            },
        },
    },
    'one': {
        'two': {
            [EOLToken]: {
                [EOLToken]: 1,
                [totalToken]: 2,
                'three': 0.5,
            },
            'three': {
                [totalToken]: 1,
                'one': 1,
            },
        },
    }, 'three': {
        'four': {
            'five': {
                [EOLToken]: 1,
                [totalToken]: 1,
            },
        },
        'one': {
            'two': {
                [EOLToken]: 1, [totalToken]: 2,
            },
        },
    },
    'two': {
        [EOLToken]: {
            'three': {
                [totalToken]: 1,
                'four': 1,
            },
        },
        'three': {
            'one': {
                [totalToken]: 2, 'two': 1,
            },
        },
        'two': {
            'three': {
                [totalToken]: 1,
                'one': 1,
            },
        },
    },
};

module.exports.deterministicOrder2Chain = {
    [EOLToken]: {
        'This': 1,
        [totalToken]: 1,
    },
    'This': {
        'is': 1,
        [totalToken]: 1,
    },
    'is': {
        'an': 1,
        [totalToken]: 1,
    },
    'an': {
        'entirely': 1,
        [totalToken]: 1,
    },
    'entirely': {
        'unique': 1,
        [totalToken]: 1,
    },
    'unique': {
        'sentence': 1,
        [totalToken]: 1,
    },
    'sentence': {
        'without': 1,
        [totalToken]: 1,
    },
    'without': {
        'any': 1,
        [totalToken]: 1,
    },
    'any': {
        'repeating': 1,
        [totalToken]: 1,
    },
    'repeating': {
        'chunks': 1,
        [totalToken]: 1,
    },
    'chunks': {
        [EOLToken]: 1,
        [totalToken]: 1,
    },
};

module.exports.deterministicOrder3Chain = {
    [EOLToken]: {
        'This': {
            'is': 1,
            [totalToken]: 1,
        },
    },
    'This': {
        'is': {
            'an': 1,
            [totalToken]: 1,
        },
    },
    'is': {
        'an': {
            'entirely': 1,
            [totalToken]: 1,
        },
    },
    'an': {
        'entirely': {
            'unique': 1,
            [totalToken]: 1,
        },
    },
    'entirely': {
        'unique': {
            'sentence': 1,
            [totalToken]: 1,
        },
    },
    'unique': {
        'sentence': {
            'without': 1,
            [totalToken]: 1,
        },
    },
    'sentence': {
        'without': {
            'any': 1,
            [totalToken]: 1,
        },
    },
    'without': {
        'any': {
            'repeating': 1,
            [totalToken]: 1,
        },
    },
    'any': {
        'repeating': {
            'chunks': 1,
            [totalToken]: 1,
        },
    },
    'repeating': {
        'chunks': {
            [EOLToken]: 1,
            [totalToken]: 1,
        },
    },
};

module.exports.deterministicOrder4Chain = {
    [EOLToken]: {
        'This': {
            'is': {
                'an': 1,
                [totalToken]: 1,
            },
        },
    },
    'This': {
        'is': {
            'an': {
                'entirely': 1,
                [totalToken]: 1,
            },
        },
    },
    'is': {
        'an': {
            'entirely': {
                'unique': 1,
                [totalToken]: 1,
            },
        },
    },
    'an': {
        'entirely': {
            'unique': {
                'sentence': 1,
                [totalToken]: 1,
            },
        },
    },
    'entirely': {
        'unique': {
            'sentence': {
                'without': 1,
                [totalToken]: 1,
            },
        },
    },
    'unique': {
        'sentence': {
            'without': {
                'any': 1,
                [totalToken]: 1,
            },
        },
    },
    'sentence': {
        'without': {
            'any': {
                'repeating': 1,
                [totalToken]: 1,
            },
        },
    },
    'without': {
        'any': {
            'repeating': {
                'chunks': 1,
                [totalToken]: 1,
            },
        },
    },
    'any': {
        'repeating': {
            'chunks': {
                [EOLToken]: 1,
                [totalToken]: 1,
            },
        },
    },
};

module.exports.bigrams = [
    [EOLToken, 'one'],
    ['one', 'two'],
    ['two', 'three'],
    ['three', 'four'],
    ['four', 'five'],
    ['five', EOLToken],
];

module.exports.trigrams = [
    [EOLToken, 'one', 'two'],
    ['one', 'two', 'three'],
    ['two', 'three', 'four'],
    ['three', 'four', 'five'],
    ['four', 'five', EOLToken],
];

module.exports.quadgrams = [
    [EOLToken, 'one', 'two', 'three'],
    ['one', 'two', 'three', 'four'],
    ['two', 'three', 'four', 'five'],
    ['three', 'four', 'five', EOLToken],
];
