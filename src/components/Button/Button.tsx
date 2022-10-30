import React, { ReactNode } from 'react';

import { Wrapper } from './styled';

export type ButtonProps = {
    children?: ReactNode;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    secondary?: boolean;
    type?: 'button';
};

const Button: React.FC<ButtonProps> = (props) => {
    const { children, disabled = false, onClick, secondary = false, type = 'button', ...rest } = props;

    return (
        <Wrapper disabled={disabled} onClick={onClick} type={type}>
            {children}
        </Wrapper>
    );
};

export default Button;
