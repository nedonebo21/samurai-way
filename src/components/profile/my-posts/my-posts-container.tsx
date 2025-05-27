import React from 'react';
import {ProfilePageProps} from "../../../pages/profile-page";
import {addPostAC, updatePostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./my-posts";

export const MyPostsContainer = (props: ProfilePageProps) => {
    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const updateNewPostText = (text: string) => {
        const action = updatePostTextAC(text)
        props.store.dispatch(action)
    }

    return (<MyPosts newPostText={state.ProfilePage.newPostText} postsData={state.ProfilePage.postsData} addPost={addPost} updateNewPostText={updateNewPostText}/>)
}