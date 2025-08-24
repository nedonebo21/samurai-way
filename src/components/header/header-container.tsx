import React from "react";
import {Header} from "./header";
import {connect} from "react-redux";
import {logoutTC} from "../../shared/model/auth-reducer";
import {StateType} from "../../shared/types/state-types";

type HeaderApiType = {
  login: string | null
  isAuth: boolean
  logout: () => void
}

export class HeaderAPIComponent extends React.Component<HeaderApiType> {
  render() {
    return <Header logout={this.props.logout} login={this.props.login} isAuth={this.props.isAuth}/>
  }
}

const mapStateToProps = (state: StateType) => (
    {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
    }
)

export const HeaderContainer = connect(mapStateToProps, {
  logout: logoutTC
})(HeaderAPIComponent)