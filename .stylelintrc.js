module.exports = {
    extends: ['stylelint-config-standard'],
    plugins: ['stylelint-order'],
    rules: {
        indentation: [4],
        'selector-pseudo-element-colon-notation': 'single',
        'property-no-unknown': null,
        'font-family-no-missing-generic-family-keyword': null,
    },
};
