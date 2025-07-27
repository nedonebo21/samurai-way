import {addPostAC} from "../model/profile-reducer";
import {MyPosts} from "./my-posts";
import {connect} from "react-redux";
import {StateType} from "../../../shared/types/state-types";

let mapStateToProps = (state: StateType) => {
    console.log('MAP STATE', state.profilePage)
    return {
        profilePage: state.profilePage,
        avatar: state.profilePage.profile.photos.small
    }
}

export const MyPostsContainer = connect(mapStateToProps,{
    addPost: addPostAC,
})(MyPosts)