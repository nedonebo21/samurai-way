import React from "react";
import {MyPosts} from "../components/profile/my-posts/my-posts";
import {ProfileInfo} from "../components/profile/profile-info/profile-info";
import {ProfilePageType} from "../redux/state";
import {FuncPostType} from "../App";


export const ProfilePage = (props: ProfilePageType & FuncPostType) => {
    const {postsData, addPost, updateNewPostText} = props
    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={props.newPostText} postsData={postsData} updateNewPostText={updateNewPostText} addPost={addPost}/>
        </div>
    )
}