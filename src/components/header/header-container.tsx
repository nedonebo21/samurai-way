import React from "react";
import {Header} from "./header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator, setAuthUserDataAC} from "../../shared/model/auth-reducer";
import {StateType} from "../../shared/types/state-types";
import {authAPI} from "../../shared/api/api";

type HeaderApiType = {
  login: string | null
  isAuth: boolean
  getAuthUserDataThunk: () => void
}

export class HeaderAPIComponent extends React.Component<HeaderApiType> {
  componentDidMount() {
    this.props.getAuthUserDataThunk()
  }

  render() {
    return <Header login={this.props.login} isAuth={this.props.isAuth}/>
  }
}

const mapStateToProps = (state: StateType) => (
    {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
    }
)

export const HeaderContainer = connect(mapStateToProps, {
  getAuthUserDataThunk: getAuthUserDataThunkCreator
})(HeaderAPIComponent)