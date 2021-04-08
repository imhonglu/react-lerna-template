import { css } from '@emotion/react';
import React, { MouseEventHandler, ReactElement, ReactNode } from 'react';

export interface ButtonProps {
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    primary?: boolean;
}

export function Button({
    children,
    primary,
    ...props
}: ButtonProps): ReactElement {
    return (
        <button
            {...props}
            css={css`
                border: 1px solid transparent;
                background: transparent;
                box-shadow: none;
                font-family: inherit;
                font-size: 1rem;
                cursor: pointer;
            `}
            type={primary ? 'submit' : 'button'}
        >
            {children}
        </button>
    );
}
