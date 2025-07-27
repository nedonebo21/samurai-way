import * as React from 'react';
import s from "../input/input.module.css";

export const FormControl = ({input, meta, children, ...props}: any) => {
  const isError = meta.touched && meta.error
  return (
      <div className={isError && s.error}>
        {props.children}
        <div>
          {isError && <span className={s.error_text}>{meta.error}</span>}
        </div>
      </div>
  )
}