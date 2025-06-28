import React from "react";
import {Header} from "./header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {StateType} from "../../redux/types/state-types";

type HeaderApiType = {
  setAuthUserDataAC: (userId: number, email: string, login: string) => void
  login: string | null
  isAuth: boolean
}

export class HeaderAPIComponent extends React.Component<HeaderApiType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
        {withCredentials: true}
    ).then(res => {
          if (res.data.resultCode === 0) {
            let {id, login, email} = res.data.data
            this.props.setAuthUserDataAC(id, email, login)
          }
        })
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

export const HeaderContainer = connect(mapStateToProps, {setAuthUserDataAC})(HeaderAPIComponent)