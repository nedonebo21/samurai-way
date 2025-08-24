import {connect} from "react-redux";
import {DialogItems} from "./dialog-items";
import {StateType} from "../../../../shared/types";
import {WithAuthRedirect} from "../../../../shared/hoc";
import {compose} from "redux";

let mapStateToProps = (state: StateType) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const ComposedComponent = compose<React.ComponentType>(
    connect(mapStateToProps),
    WithAuthRedirect
)(DialogItems)

export const DialogsItemsContainer = () => <ComposedComponent/>