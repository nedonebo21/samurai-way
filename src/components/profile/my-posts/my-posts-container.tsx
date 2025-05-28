import React from 'react';
import {StoreContext} from 'src/store-context';
import {addPostAC, updatePostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./my-posts";

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()
                    const addPost = () => {
                        store.dispatch(addPostAC())
                    }
                    const updateNewPostText = (text: string) => {
                        const action = updatePostTextAC(text)
                        store.dispatch(action)
                    }

                    return <MyPosts newPostText={state.ProfilePage.newPostText}
                                    postsData={state.ProfilePage.postsData}
                                    addPost={addPost} updateNewPostText={updateNewPostText}/>
                }
            }
        </StoreContext.Consumer>
    )
}