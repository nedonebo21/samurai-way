import {addMessageAC, updateMessageTextAC} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Messages} from "./messages";
import {StateType} from "../../../redux/types/state-types";

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export const MessagesContainer = connect(mapStateToProps, {
    messageChange: updateMessageTextAC,
    messageSend: addMessageAC
})(Messages)