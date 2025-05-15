import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


export const Profile = (props: ProfilePageType & {addPost: (postText:string) => void}) => {
    const {postsData, addPost} = props
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData} addPost={addPost}/>
        </div>
    )
}