module.exports = {
    testMatch: ['**/?(*.)+(spec|test).js?(x)'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!<rootDir>/node_modules/',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    coverageReporters: [
        'text',
        'lcov',
    ],
    setupTestFrameworkScriptFile: '<rootDir>/src/__tests__/setup.js',
};
