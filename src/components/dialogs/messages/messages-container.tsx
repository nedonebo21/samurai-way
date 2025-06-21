import {addMessageAC, updateMessageTextAC} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Messages} from "./messages";
import {StateType} from "../../../redux/types/state-types";
import {ActionsType} from "../../../redux/types/action-types";

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        messageChange: (text: string) => {
            dispatch(updateMessageTextAC(text))
        },
        messageSend: () => {
            dispatch(addMessageAC())
        }
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)