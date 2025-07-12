import {connect} from "react-redux";
import {DialogItems} from "./dialog-items";
import {StateType} from "../../../redux/types/state-types";

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
export const DialogsItemsContainer = connect(mapStateToProps)(DialogItems)