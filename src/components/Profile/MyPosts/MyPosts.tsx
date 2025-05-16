import React, {KeyboardEvent, RefObject} from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";
import {FuncPostType} from "../../../App";


export const MyPosts = (props: ProfilePageType & FuncPostType) => {
    const {postsData, addPost, updateNewPostText} = props

    const postsList = postsData
        .map((post) => (
            <Post key={post.id} message={post.message} likesCount={post.likes}/>
        ))
    const postsItems = postsData.length ? postsList : <p>No posts. Lets post something!</p>

    const newPostElement = React.createRef<any>()
    const onKeyDownHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.ctrlKey && event.key === "Enter") {
            addPostHandler()
        }
    }
    const addPostHandler = () => {
        addPost()
    }
    const onPostChangeHandler = () => {
        const text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.posts_wrapper}>
            <h3>My Posts</h3>
            <div className={s.new_post}>
                <textarea onKeyDown={onKeyDownHandler}
                          ref={newPostElement}
                          value={props.newPostText}
                          onChange={onPostChangeHandler}
                          placeholder={"Черкани че-нить...."}></textarea>
                <button onClick={addPostHandler}>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};