import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    const postsData = [
        {id: "1", message: "Yo", likes: 12},
        {id: "2", message: "Its my social network!!!", likes: 12}
    ]

    return (
        <div className={s.posts_wrapper}>
            <h3>My Posts</h3>
            <div className={s.new_post}>
                <textarea placeholder={"Черкани че-нить...."}></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postsData.map((post) => (
                    <Post key={post.id} message={post.message} likesCount={post.likes}/>
                ))}
            </div>
        </div>
    );
};