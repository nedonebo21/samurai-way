import React, {ReactNode} from 'react';
import s from './button.module.css';
type ButtonProps = {
    children: ReactNode
    onClick: () => void
    className?: string
    disabled?:boolean
}

export const Button = (props: ButtonProps) => {
    const {children, onClick, className} = props
    return (
        <button onClick={onClick} disabled={props.disabled} className={`${className} ${s.button}`}>{children}</button>
    );
};
