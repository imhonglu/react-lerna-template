module.exports = {
    root: true,
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
    },
    extends: 'airbnb-typescript-prettier',
    rules: {
        // 취향대로 변경하세요.
        indent: 0,
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/prop-types': 0,
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        'react/jsx-props-no-spreading': 0,
        'react-hooks/exhaustive-deps': 0,
    },
};
