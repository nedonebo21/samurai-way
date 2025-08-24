import React from 'react';
import s from './users.module.css'
import {UserType} from "../../../../shared/types/state-types";
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
export const Users = ({
                        users,
                        followThunk,
                        unFollowThunk,
                        followingInProgress,
                        onPageChanged,
                        currentPage,
                        pageSize,
                        totalUsersCount
                      }: UsersType) => {

  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
      <div className={s.user_items}>
        <User users={users} followThunk={followThunk} unFollowThunk={unFollowThunk}
              followingInProgress={followingInProgress}/>
        <Paginator pages={pages} onPageChanged={onPageChanged} currentPage={currentPage}/>
      </div>
  )
}
