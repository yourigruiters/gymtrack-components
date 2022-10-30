import React from 'react';

import { Wrapper } from './styled';

export type ButtonProps = {
    className?: string;
    id?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ className, id, children, disabled = false, onClick, type = 'button' }) => {
    return (
        <Wrapper disabled={disabled} onClick={onClick} type={type} className={className} id={id}>
            {children}
        </Wrapper>
    );
};

export default Button;
