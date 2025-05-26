import React, {forwardRef} from 'react';
import {KeyboardEvent} from 'react';
import s from './textarea.module.css';

type TextareaProps = {
    value: string
    onChange: () => void
    onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void
    placeholder: string
}

export const Textarea =forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({value,onChange,onKeyDown, placeholder}, ref) => {
        return (
            <textarea
                onKeyDown={onKeyDown}
                onChange={onChange}
                value={value}
                ref={ref}
                placeholder={placeholder}
                className={s.textarea}
            ></textarea>
        )
    }
)
