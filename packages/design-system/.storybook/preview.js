/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { GlobalStyles } from '../src/global-styles';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
    (Story) => (
        <GlobalStyles>
            <Story />
        </GlobalStyles>
    ),
];
