module.exports = {
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '~': './src',
                },
                cwd: 'packagejson',
            },
        ],
    ],
};
