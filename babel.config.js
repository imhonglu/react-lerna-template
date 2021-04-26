module.exports = {
    babelrcRoots: ['.', 'packages/*'],
    plugins: ['macros'],
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        '@babel/preset-react',
        '@emotion/babel-preset-css-prop',
    ],
};
