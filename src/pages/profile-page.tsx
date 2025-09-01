import React from "react";
import {ProfileInfo} from "../components/profile/ui/profile-info/profile-info";
import {MyPostsContainer} from "../components/profile/ui/my-posts/my-posts-container";
import {ProfileType} from "../shared/types";
import {
  FormDataProfileType
} from "../components/profile/ui/profile-info/description/profile-status/profile-data-form/profile-data-form";

type ProfilePageType = {
  profile: ProfileType
  status: string
  updateStatusThunk: (status: string) => void
  isOwner: boolean
  saveAvatar: (file: File) => void
  saveProfile: (formData: FormDataProfileType) => Promise<void>
}

export const ProfilePage = (props: ProfilePageType) => {
  return (
      <div>
        <ProfileInfo saveProfile={props.saveProfile} isOwner={props.isOwner} saveAvatar={props.saveAvatar} profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
        <MyPostsContainer/>
      </div>
  )
}
