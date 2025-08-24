import React from 'react';
import {Redirect} from "react-router-dom";
import {StateType} from "../types";
import {connect} from "react-redux";

interface AuthProps {
  isAuth: boolean
}

let mapStateToPropsForRedirect = (state: StateType) => ({
  isAuth: state.auth.isAuth,
})

export const WithAuthRedirect = <T extends AuthProps>(Component: React.ComponentType<T>) => {
  class RedirectComponent extends React.Component<AuthProps>{
    render(){
      if (!this.props.isAuth) return <Redirect to={'/login'}/>
      return <Component {...this.props as T}/>
    }
  }

  //TODO придумать чета с any (потом)
  return connect(mapStateToPropsForRedirect)(RedirectComponent as any)
}