import {connect} from "react-redux";
import {DialogItems} from "./dialog-items";
import {StateType} from "../../../redux/types/state-types";
import {WithAuthRedirect} from "../../../hoc/with-auth-redirect";

let mapStateToProps = (state: StateType) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

const AuthRedirectComponent = WithAuthRedirect(DialogItems)

let mapStateToPropsForRedirect = (state: StateType) => ({
  isAuth: state.auth.isAuth,
})

const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

export const DialogsItemsContainer = connect(mapStateToProps)(ConnectedAuthRedirectComponent)