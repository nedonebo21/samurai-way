import React from 'react';
import defaultAvatar from '../../../../assets/img/default-avatar.jpg';
import {Button} from "../../../../shared/ui/button/button";
import {UserIcon} from "../../../../shared/ui/user-icon/user-icon";
import s from './users.module.css'
import {UserType} from "../../../../shared/types/state-types";
import {NavLink} from "react-router-dom";
import {Paginator} from "./paginator/paginator";
import {User} from "./user/user";

type UsersType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  followThunk: (userId: number) => void
  unFollowThunk: (userId: number) => void
  followingInProgress: number[]
  users: UserType[]
}
export const Users = ({users, followThunk, unFollowThunk, followingInProgress, ...props}: UsersType) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
      <div className={s.user_items}>
        <User users={users} followThunk={followThunk} unFollowThunk={unFollowThunk} followingInProgress={followingInProgress}/>
        <Paginator pages={pages} onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
      </div>
  )
}
