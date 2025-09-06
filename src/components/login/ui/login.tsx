import React from 'react';
import {LoginReduxForm} from "./login-form/login-form";
import {connect} from "react-redux";
import {loginTC, logoutTC} from "../model/auth-reducer";
import {FormDataType} from "../../../shared/types";
import {Redirect} from "react-router-dom";
import s from './login-form/login-form.module.css'
import {StateType} from "../../../shared/types";

type LoginPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string | null | undefined) => void
  logout: () => void
  isAuth: boolean
  captcha: string | null | undefined
}


const Login = (props: LoginPropsType) => {

  const onSubmit = (formData: FormDataType) => {
    if (formData.email && formData.password) {
      props.login(
          formData.email,
          formData.password,
          formData.rememberMe ?? false,
          formData.captcha
      )
    }
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
      <div className={s.login_form}>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
      </div>
  )
}

const mapStateToProps = (state: StateType) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha
})

export default connect(mapStateToProps, {
  login: loginTC,
  logout: logoutTC
})(Login)