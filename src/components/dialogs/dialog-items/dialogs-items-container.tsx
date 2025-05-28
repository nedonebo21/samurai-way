import {StateType} from "../../../redux/store";
import {connect} from "react-redux";
import {DialogItems} from "./dialog-items";

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
export const DialogsItemsContainer = connect(mapStateToProps)(DialogItems)