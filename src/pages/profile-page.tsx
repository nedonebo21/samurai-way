import React from "react";
import {ProfileInfo} from "../components/profile/ui/profile-info/profile-info";
import {MyPostsContainer} from "../components/profile/ui/my-posts/my-posts-container";
import {ProfileType} from "../shared/types";

type ProfilePageType = {
  profile: ProfileType
  status: string
  updateStatusThunk: (status: string) => void
  isOwner: boolean
  saveAvatar: (file: File) => void
}

export const ProfilePage = (props: ProfilePageType) => {
  return (
      <div>
        <ProfileInfo isOwner={props.isOwner} saveAvatar={props.saveAvatar} profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
        <MyPostsContainer/>
      </div>
  )
}
