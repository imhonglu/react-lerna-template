/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
    buildOptions: {
        out: 'dist',
    },
    devOptions: {
        /* ... */
    },
    mount: {
        public: '/',
        src: '/dist',
    },
    optimize: {
        /* Example: Bundle your final build: */
        // "bundle": true,
    },
    packageOptions: {
        /* ... */
    },
    plugins: [
        [
            '@snowpack/plugin-babel',
            {
                transformOptions: {
                    rootMode: 'upward',
                },
            },
        ],
        '@snowpack/plugin-react-refresh',
    ],
    routes: [
        /* Enable an SPA Fallback in development: */
        { dest: '/index.html', match: 'routes', src: '.*' },
    ],
    workspaceRoot: '../../',
};
