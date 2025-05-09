import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


export const Profile = ({postsData}: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}