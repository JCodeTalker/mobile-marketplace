/* eslint-disable indent */
module.exports = {
    env: {
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'prettier/react',
    ],
    // parser: '@typescript-eslint/parser',
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
        'react-hooks',
        'jsx-ally',
        'import',
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn', {
                extensions: ['jsx', 'tsx', 'js', 'ts'],
            },
        ],
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['warn'],
        // 'react/jsx-filename-extension': 'off',
    },
};
