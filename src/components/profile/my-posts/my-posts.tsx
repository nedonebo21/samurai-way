import React from 'react';
import s from "./my-posts.module.css";
import {Post} from "./post/post";
import {Button} from "../../../shared/ui/button/button";
import {ProfilePageType} from "../../../shared/types/state-types";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostsType = {
  addPost: (newPost: string) => void
  profilePage: ProfilePageType
  avatar: string | null
}
type AddPostFormDataType = {
  newPost: string
}

export const MyPosts = (props: MyPostsType) => {
  const postsList = props.profilePage.postsData
      .map((post) => (
          <Post key={post.id} message={post.message} avatar={props.avatar} likesCount={post.likes}/>
      ))
  const postsItems = props.profilePage.postsData.length ? postsList : <p>No posts. Lets post something!</p>

  const handleAddPost = (values: AddPostFormDataType) => {
    props.addPost(values.newPost)
  }

  return (
      <div className={s.posts_wrapper}>
        <h3>My Posts</h3>
        <AddPostReduxForm onSubmit={handleAddPost}/>
        <div className={s.posts}>
          {postsItems}
        </div>
      </div>
  )
}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
  return (
      <form className={s.new_post} onSubmit={props.handleSubmit}>
        <div>
          <label>
            <Field className={s.field} name={'newPost'} placeholder={'Enter new post'} component={'input'}/>
          </label>
        </div>
        <div>
          <Button onClick={() => {
          }}>Add Post</Button>
        </div>
        <div>
          <Button onClick={() => {
          }}>Clear</Button>
        </div>
      </form>
  )
}
const AddPostReduxForm = reduxForm<AddPostFormDataType>({form: 'newPost'})(AddPostForm)