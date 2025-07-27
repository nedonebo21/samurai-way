import * as React from 'react';
import s from './input.module.css'

export const Input = ({input, meta, ...props}: any) => {
  const isError = meta.touched && meta.error
  return (
      <div className={isError && s.error}>
        <input {...input} {...props} className={s.input}/>
        <div>
          {isError && <span className={s.error_text}>{meta.error}</span>}
        </div>
      </div>
  )
}