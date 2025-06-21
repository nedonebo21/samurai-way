import {addPostAC, updatePostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./my-posts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/types/state-types";
import {ActionsType} from "../../../redux/types/action-types";

let mapStateToProps = (state: StateType) => {
    console.log('MAP STATE', state.profilePage)
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text:string) => {
            dispatch(updatePostTextAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)