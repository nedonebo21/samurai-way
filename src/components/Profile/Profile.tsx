import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";
import {FuncPostType} from "../../App";


export const Profile = (props: ProfilePageType & FuncPostType) => {
    const {postsData, addPost, updateNewPostText} = props
    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={props.newPostText} postsData={postsData} updateNewPostText={updateNewPostText} addPost={addPost}/>
        </div>
    )
}