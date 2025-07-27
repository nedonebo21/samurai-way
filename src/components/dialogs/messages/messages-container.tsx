import {addMessageAC} from "../model/dialogs-reducer";
import {connect} from "react-redux";
import {Messages} from "./messages";
import {StateType} from "../../../shared/types/state-types";

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export const MessagesContainer = connect(mapStateToProps, {
    messageSend: addMessageAC
})(Messages)