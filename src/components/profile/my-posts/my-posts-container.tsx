import {addPostAC, updatePostTextAC} from "../model/profile-reducer";
import {MyPosts} from "./my-posts";
import {connect} from "react-redux";
import {StateType} from "../../../shared/types/state-types";

let mapStateToProps = (state: StateType) => {
    console.log('MAP STATE', state.profilePage)
    return {
        profilePage: state.profilePage
    }
}

export const MyPostsContainer = connect(mapStateToProps,{
    addPost: addPostAC,
    updateNewPostText: updatePostTextAC
})(MyPosts)