import React from 'react';
import s from "./my-posts.module.css";
import {Post} from "./post/post";
import {Button} from "../../../../shared/ui/button/button";
import {ProfilePageType} from "../../../../shared/types/state-types";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../shared/utils/validators/validators";
import {Textarea} from "../../../../shared/ui/textarea/textarea";
import {FormDataType} from "../../../../shared/types/form-data-type";

type MyPostsType = {
  addPost: (newPost: string) => void
  profilePage: ProfilePageType
  avatar: string | null
}



export class MyPosts extends React.PureComponent<MyPostsType> {
  shouldComponentUpdate(nextProps: Readonly<MyPostsType>, nextState: Readonly<{}>): boolean {
    return nextProps != this.props || nextState != this.state
  }
  render() {
    console.log('qwe')
    const postsList = this.props.profilePage.postsData
        .map((post) => (
            <Post key={post.id} message={post.message} avatar={this.props.avatar} likesCount={post.likes}/>
        ))
    const postsItems = this.props.profilePage.postsData.length ? postsList : <p>No posts. Lets post something!</p>

    const handleAddPost = (values: FormDataType) => {
      if (values.newPost) this.props.addPost(values.newPost)
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
}

const maxLength10 = maxLengthCreator(10)

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
      <form className={s.new_post} onSubmit={props.handleSubmit}>
        <div>
          <label>
            <Field validate={[required, maxLength10]}
                   name={'newPost'} placeholder={'Enter new post'} component={Textarea}/>
          </label>
        </div>
        <div className={s.btn_block}>
          <div>
            <Button onClick={() => {
            }}>Add Post</Button>
          </div>
          <div>
            <Button onClick={() => {
            }}>Clear</Button>
          </div>
        </div>
      </form>
  )
}
const AddPostReduxForm = reduxForm<FormDataType>({form: 'newPost'})(AddPostForm)