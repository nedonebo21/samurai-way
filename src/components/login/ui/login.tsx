import React from 'react';
import {LoginReduxForm} from "./login-form/login-form";
import {connect} from "react-redux";
import {loginTC, logoutTC} from "../model/auth-reducer";
import {FormDataType} from "../../../shared/types/form-data-type";
import {Redirect} from "react-router-dom";
import s from './login-form/login-form.module.css'
import {StateType} from "../../../shared/types/state-types";

type LoginPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
  logout: () => void
  isAuth: boolean
}


const Login = (props: LoginPropsType) => {

  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
    if (formData.email && formData.password) {
      props.login(
          formData.email,
          formData.password,
          formData.rememberMe ?? false
      )
    }
  }
  if (props.isAuth){
    return <Redirect to={'/profile'} />
  }

  return (
      <div className={s.login_form}>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>
  )
}

const mapStateToProps = (state: StateType) => (
    {isAuth: state.auth.isAuth}
)

export default connect(mapStateToProps, {
  login: loginTC,
  logout: logoutTC
})(Login)