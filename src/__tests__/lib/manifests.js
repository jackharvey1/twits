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
    '%EOL%': {
        '%EOL%': 1,
        '%total%': 4,
        'one': 0.25,
        'three': 0.5,
        'two': 0.75,
    },
    'five': {
        '%EOL%': 1,
        '%total%': 1,
    },
    'four': {
        '%total%': 1,
        'five': 1,
    },
    'one': {
        '%total%': 3,
        'two': 1,
    },
    'three': {
        '%total%': 3,
        'four': 1,
        'one': 0.6666666666666666,
    },
    'two': {
        '%EOL%': 0.8,
        '%total%': 5,
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
    '%EOL%': {
        'one': {
            '%total%': 1,
            'two': 1,
        },
        'three': {
            '%total%': 1,
            'four': 1,
        },
        'two': {
            '%total%': 1,
            'two': 1,
        },
    },
    'five': {
        '%EOL%': {
            '%total%': 1,
            'two': 1,
        },
    },
    'four': {
        'five': {
            '%EOL%': 1,
            '%total%': 1,
        },
    },
    'one': {
        'two': {
            '%EOL%': 1,
            '%total%': 3,
            'three': 0.3333333333333333,
        },
    },
    'three': {
        'four': {
            '%total%': 1,
            'five': 1,
        },
        'one': {
            '%total%': 2,
            'two': 1,
        },
    },
    'two': {
        '%EOL%': {
            '%EOL%': 1,
            '%total%': 2,
            'three': 0.5,
        },
        'three': {
            '%total%': 2,
            'one': 1,
        },
        'two': {
            '%total%': 1,
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
    '%EOL%': {
        'one': {
            'two': {
                '%total%': 1,
                'three': 1,
            },
        },
        'three': {
            'four': {
                '%total%': 1,
                'five': 1,
            },
        },
        'two': {
            'two': {
                '%total%': 1,
                'three': 1,
            },
        },
    },
    'five': {
        '%EOL%': {
            'two': {
                '%total%': 1,
                'two': 1,
            },
        },
    },
    'four': {
        'five': {
            '%EOL%': {
                '%total%': 1,
                'two': 1,
            },
        },
    },
    'one': {
        'two': {
            '%EOL%': {
                '%EOL%': 1,
                '%total%': 2,
                'three': 0.5,
            },
            'three': {
                '%total%': 1,
                'one': 1,
            },
        },
    }, 'three': {
        'four': {
            'five': {
                '%EOL%': 1,
                '%total%': 1,
            },
        },
        'one': {
            'two': {
                '%EOL%': 1, '%total%': 2,
            },
        },
    },
    'two': {
        '%EOL%': {
            'three': {
                '%total%': 1,
                'four': 1,
            },
        },
        'three': {
            'one': {
                '%total%': 2, 'two': 1,
            },
        },
        'two': {
            'three': {
                '%total%': 1,
                'one': 1,
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
    ['%EOL%', 'one', 'two', 'three'],
    ['one', 'two', 'three', 'four'],
    ['two', 'three', 'four', 'five'],
    ['three', 'four', 'five', '%EOL%'],
];
