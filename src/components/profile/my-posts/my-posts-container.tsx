import {addPostAC, updatePostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./my-posts";
import {connect} from "react-redux";
import {ActionsType, StateType} from "../../../redux/store";

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