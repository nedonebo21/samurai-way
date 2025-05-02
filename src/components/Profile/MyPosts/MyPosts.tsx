import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.posts_wrapper}>
            <h3>My Posts</h3>
            <div className={s.new_post}>
                <textarea placeholder={"Черкани че-нить...."}></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post likesCount={12} message={"Yo"}/>
                <Post likesCount={73} message={"Its my social network!!!"}/>
            </div>
        </div>
    );
};