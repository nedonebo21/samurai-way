import React, {ReactNode} from 'react';
import s from './button.module.css';
type ButtonProps = {
    children: ReactNode
    onClick: () => void
    className?: string
}

export const Button = (props: ButtonProps) => {
    const {children, onClick, className} = props
    return (
        <button onClick={onClick} className={`${className} ${s.button}`}>{children}</button>
    );
};
