import React from 'react';
import {Redirect} from "react-router-dom";

interface AuthProps {
  isAuth: boolean
}

export const WithAuthRedirect = <T extends AuthProps>(Component: React.ComponentType<T>) => {
  class RedirectComponent extends React.Component<T>{
    render(){
      if (!this.props.isAuth) return <Redirect to={'/login'}/>
      return <Component {...this.props}/>
    }
  }
  return RedirectComponent
}