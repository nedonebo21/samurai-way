import React from "react";
import {ProfileInfo} from "../components/profile/ui/profile-info/profile-info";
import {MyPostsContainer} from "../components/profile/ui/my-posts/my-posts-container";
import {ProfileType} from "../shared/types/state-types";

type ProfilePageType = {
  profile: ProfileType
  status: string
  updateStatusThunk: (status: string) => void
}

export const ProfilePage = (props: ProfilePageType) => {
  return (
      <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
        <MyPostsContainer/>
      </div>
  )
}
