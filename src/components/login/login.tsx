import React from 'react';
import {LoginReduxForm} from "./login-form/login-form";
import {connect} from "react-redux";
import {loginThunkCreator, logoutThunkCreator} from "../../shared/model/auth-reducer";
import {FormDataType} from "../../shared/types/form-data-type";
import {Redirect} from "react-router-dom";
import {StateType} from "../../shared/types/state-types";

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
      <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>
  )
}

const mapStateToProps = (state: StateType) => (
    {isAuth: state.auth.isAuth}
)

export default connect(mapStateToProps, {
  login: loginThunkCreator,
  logout: logoutThunkCreator
})(Login)