import React from "react";
import {MyPosts, PostType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



export const Profile = () => {
    const postsData: PostType[] = [
        {id: "1", message: "Yo", likes: 12},
        {id: "2", message: "Its my social network!!!", likes: 12},
        {id: "3", message: "I hope serega pirat will be my fan", likes: 999},
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}