import {ActionsType, StateType} from "../../../redux/store";
import {addMessageAC, updateMessageTextAC} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Messages} from "./messages";

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