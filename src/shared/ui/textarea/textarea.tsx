import React, {forwardRef} from 'react';
import s from './textarea.module.css';


export const Textarea = forwardRef<HTMLTextAreaElement, any>(
    ({input, meta, ...props}) => {

      const isError = meta.touched && meta.error

      return (
          <div className={isError && s.error}>
            <textarea className={s.textarea} {...input} {...props}/>
            <div>
              {isError && <span className={s.error_text}>{meta.error}</span>}
            </div>
          </div>
      )
    }
)
