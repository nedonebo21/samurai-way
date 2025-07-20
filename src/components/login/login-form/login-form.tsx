import * as React from 'react';
import {Button} from "../../../shared/ui/button/button";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const LoginForm = (props: InjectedFormProps) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>
            <span>Login: </span>
            <Field name={'login'} placeholder={'Login'} component={'input'}/>
          </label>
        </div>
        <div>
          <label>
            <span>Password: </span>
            <Field name={'password'} placeholder={'Password'} component={'input'}/>
          </label>
        </div>
        <div>
          <label>
            <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>
            <span>Remember me</span>
          </label>
        </div>
        <div>
          <Button onClick={() => {}}>Login</Button>
        </div>
      </form>
  )
}
export const LoginReduxForm = reduxForm({form: 'login',})(LoginForm)