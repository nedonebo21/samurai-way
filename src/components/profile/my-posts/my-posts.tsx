import React, {KeyboardEvent, RefObject} from 'react';
import s from "./my-posts.module.css";
import {Post} from "./post/post";
import {ProfilePageProps} from "../../../pages/profile-page";


export const MyPosts = (props: ProfilePageProps) => {
    const {postsData, dispatch} = props

    const postsList = postsData
        .map((post) => (
            <Post key={post.id} message={post.message} likesCount={post.likes}/>
        ))
    const postsItems = postsData.length ? postsList : <p>No posts. Lets post something!</p>

    const newPostElement = React.createRef<any>()
    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.ctrlKey && event.key === "Enter") {
            handleAddPost()
        }
    }
    const handleAddPost = () => {
        dispatch({type: "ADD-POST"})
    }
    const handlePostChange = () => {
        const text = newPostElement.current.value
        dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
    }

    return (
        <div className={s.posts_wrapper}>
            <h3>My Posts</h3>
            <div className={s.new_post}>
                <textarea onKeyDown={handleKeyDown}
                          ref={newPostElement}
                          value={props.newPostText}
                          onChange={handlePostChange}
                          placeholder={"Черкани че-нить...."}></textarea>
                <button onClick={handleAddPost}>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};