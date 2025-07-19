import React from "react";
import {ProfileInfo} from "../components/profile/profile-info/profile-info";
import {MyPostsContainer} from "../components/profile/my-posts/my-posts-container";
import {ProfileType} from "../shared/types/state-types";

type ProfilePageType = {
  profile: ProfileType
}

export const ProfilePage = (props: ProfilePageType) => {
  return (
      <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
      </div>
  )
}
