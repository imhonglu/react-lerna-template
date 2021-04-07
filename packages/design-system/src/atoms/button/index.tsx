import React, { ReactNode } from 'react';

export interface ButtonProps {
    primary?: boolean;
    children?: ReactNode;
}

export function Button({ primary, children }: ButtonProps) {
    return <button type={primary ? 'submit' : 'button'}>{children}</button>;
}
