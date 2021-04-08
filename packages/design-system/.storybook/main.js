const path = require('path');

module.exports = {
    stories: ['../src/**/*stories.mdx', '../src/**/*stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    babel: async (options) => ({
        ...options,
        rootMode: 'upward',
    }),
    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};
