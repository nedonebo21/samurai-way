import React from 'react';
import {LoginReduxForm} from "./login-form/login-form";

export const Login = () => {

  const onSubmit = (formData: {}) => {
    console.log(formData)
  }

  return (
      <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>
  )
}