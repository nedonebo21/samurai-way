import * as React from 'react';
import {Button} from "../../../../shared/ui/button/button";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../../../shared/ui/input/input";
import s from './login-form.module.css'
import {required} from "../../../../shared/utils";

const LoginForm = ({handleSubmit, error}: InjectedFormProps) => {
  return (
      <form className={s.form} onSubmit={handleSubmit}>
        <div>
          <label>
            <span>Login: </span>
            <Field validate={[required]} name={'email'} placeholder={'Email'} component={Input}/>
          </label>
        </div>
        <div>
          <label>
            <span>Password: </span>
            <Field validate={[required]} name={'password'} type={'password'} placeholder={'Password'}
                   component={Input}/>
          </label>
        </div>
        <div>
          <label className={s.remember_me}>
            <Field name={'rememberMe'} type={'checkbox'} component={Input}/>
            <span>Remember me</span>
          </label>
        </div>
        {error && <div className={s.form_error}>{error}</div>}
        <div>
          <Button onClick={() => {
          }}>Login</Button>
        </div>
      </form>
  )
}
export const LoginReduxForm = reduxForm({form: 'login',})(LoginForm)