import React, {KeyboardEvent} from 'react';
import s from "./my-posts.module.css";
import {Post} from "./post/post";
import {Button} from "../../../shared/ui/button/button";
import {Textarea} from "../../../shared/ui/textarea/textarea";
import {ProfilePageType} from "../../../redux/store";

type MyPostsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    profilePage: ProfilePageType
}

export const MyPosts = (props: MyPostsType) => {
    const postsList = props.profilePage.postsData
        .map((post) => (
            <Post key={post.id} message={post.message} likesCount={post.likes}/>
        ))
    const postsItems = props.profilePage.postsData.length ? postsList : <p>No posts. Lets post something!</p>

    const newPostElement = React.createRef<any>()
    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.ctrlKey && event.key === "Enter") {
            handleAddPost()
        }
    }
    const handleAddPost = () => {
        props.addPost()
    }
    const handlePostChange = () => {
        const text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.posts_wrapper}>
            <h3>My Posts</h3>
            <div className={s.new_post}>
                <Textarea onKeyDown={handleKeyDown} ref={newPostElement} value={props.profilePage.newPostText} onChange={handlePostChange} placeholder={'Черкани че-нить....'}/>
                <Button onClick={handleAddPost}>Add Post</Button>
                <Button onClick={() => {}}>Remove</Button>
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};