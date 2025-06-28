import React from 'react';
import defaultAvatar from '../../assets/img/default-avatar.jpg';
import {Button} from "../../shared/ui/button/button";
import {UserIcon} from "../../shared/ui/user-icon/user-icon";
import s from './users.module.css'
import {User} from "../../redux/types/state-types";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  toggleFollowingProgress: (isFetching: boolean, userId: number) => void
  followingInProgress: number[]
  users: User[]
}
export const Users = (props: UsersType) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
      <div className={s.user_items}>
        {
          props.users.map(el => {
            return (
                <div className={s.user_item} key={el.id}>
                  <div className={s.user_action}>
                    <div>
                      <NavLink to={`/profile/${el.id}`}>
                        <UserIcon avatarUrl={el.photos.small !== null ? el.photos.small : defaultAvatar}/>
                      </NavLink>
                    </div>
                    <div>{el.followed
                        ? <Button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                          props.toggleFollowingProgress(true, el.id)
                          usersAPI.unFollowUser(el.id).then(data => {
                            if (data.resultCode === 0) {
                              props.unFollow(el.id)
                            }
                            props.toggleFollowingProgress(false, el.id)
                          })
                        }}>Unfollow</Button>
                        : <Button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                          props.toggleFollowingProgress(true, el.id)
                          usersAPI.followUser(el.id).then(data => {
                            if (data.resultCode === 0) {
                              props.follow(el.id)
                            }
                            props.toggleFollowingProgress(false, el.id)
                          })
                        }}>Follow</Button>
                    }
                    </div>
                  </div>
                  <div className={s.user_description}>
                    <div className={s.user_info}>
                      <div className={s.user_name}>{el.name}</div>
                      <div className={s.user_status}>{el.status}</div>
                    </div>
                    <div className={s.user_location}>
                      <div className={s.user_country}>{'el.location.country'}</div>
                      <div className={s.user_city}>{'el.location.city'}</div>
                    </div>
                  </div>
                </div>
            )
          })
        }
        <div className={s.btn_block}>
          {pages.map(el => {
            return <Button
                disabled={props.currentPage === el}
                className={props.currentPage === el ? s.selected_page : ''}
                onClick={() => {
                  props.onPageChanged(el)
                }}>{el}</Button>
          })}
        </div>
      </div>
  )
}
