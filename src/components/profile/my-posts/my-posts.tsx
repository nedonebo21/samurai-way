import React, {KeyboardEvent, RefObject} from 'react';
import s from "./my-posts.module.css";
import {Post} from "./post/post";
import {ProfilePageProps} from "../../../pages/profile-page";
import {addPostAC, updatePostTextAC} from "../../../redux/profile-reducer";
import {Button} from "../../../shared/ui/button/button";
import {Textarea} from "../../../shared/ui/textarea/textarea";

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
        dispatch(addPostAC())
    }
    const handlePostChange = () => {
        const text = newPostElement.current.value
        const action = updatePostTextAC(text)
        dispatch(action)
    }

    return (
        <div className={s.posts_wrapper}>
            <h3>My Posts</h3>
            <div className={s.new_post}>
                {/*<textarea onKeyDown={handleKeyDown}*/}
                {/*          ref={newPostElement}*/}
                {/*          value={props.newPostText}*/}
                {/*          onChange={handlePostChange}*/}
                {/*          placeholder={"Черкани че-нить...."}></textarea>*/}
                <Textarea onKeyDown={handleKeyDown} ref={newPostElement} value={props.newPostText} onChange={handlePostChange} placeholder={'Черкани че-нить....'}/>
                <Button onClick={handleAddPost}>Add Post</Button>
                <Button onClick={() => {}}>Remove</Button>
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};