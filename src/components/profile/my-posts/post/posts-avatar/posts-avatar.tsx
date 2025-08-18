import React from 'react';
import s from "./posts-avatar.module.css";
import defaultAvatar from '../../../../../assets/img/default-avatar.jpg'

type PostsAvatarPropsType = {
  avatar: string | null
}

export const PostsAvatar = (props: PostsAvatarPropsType) => {
  return (
      <img className={s.img}
           src={!!props.avatar
               ? props.avatar
               : defaultAvatar}
           alt=""/>
  );
};