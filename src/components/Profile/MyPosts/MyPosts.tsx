import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostsDataType} from "../../../index";


export const MyPosts = ({postsData}: PostsDataType) => {

    const postsList = postsData
        .map((post) => (
            <Post key={post.id} message={post.message} likesCount={post.likes}/>
        ))
    const postsItems = postsData.length ? postsList : <p>No posts. Lets post something!</p>

    return (
        <div className={s.posts_wrapper}>
            <h3>My Posts</h3>
            <div className={s.new_post}>
                <textarea placeholder={"Черкани че-нить...."}></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};