import s from "../users.module.css";
import {NavLink} from "react-router-dom";
import {UserIcon} from "../../../../../shared/ui/user-icon/user-icon";
import defaultAvatar from "../../../../../assets/img/default-avatar.jpg";
import {Button} from "../../../../../shared/ui/button/button";
import React from "react";
import {UserType} from "../../../../../shared/types/state-types";

type UserPropsType = {
  users: UserType[]
  followThunk: (userId: number) => void
  unFollowThunk: (userId: number) => void
  followingInProgress: number[]
}
export const User = (props: UserPropsType) => {
  return (
      <>
        {props.users.map(el => {
          return (
              <div className={s.user_item} key={el.id}>
                <div className={s.user_action}>
                  <div>
                    <NavLink to={`/profile/${el.id}`}>
                      <UserIcon avatarUrl={el.photos.small !== null ? el.photos.small : defaultAvatar}/>
                    </NavLink>
                  </div>
                  <div>{el.followed
                      ? <Button
                          disabled={props.followingInProgress.some(id => id === el.id)}
                          onClick={() => {
                            props.unFollowThunk(el.id)
                          }}>Unfollow</Button>
                      : <Button
                          disabled={props.followingInProgress.some(id => id === el.id)}
                          onClick={() => {
                            props.followThunk(el.id)
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
        })}
      </>
  )
}