import s from "./profile-info.module.css";
import {Description} from "./description/description";
import React from "react";
import {Preloader} from "../../../../shared/ui/preloader/preloader";
import {ProfileType} from "../../../../shared/types";
import {FormDataProfileType} from "./description/profile-status/profile-data-form/profile-data-form";

type ProfileInfoType = {
  profile: ProfileType
  status: string
  updateStatusThunk: (status: string) => void
  isOwner: boolean
  saveAvatar: (file: File) => void
  saveProfile: (formData: FormDataProfileType) => Promise<void>
}

export const ProfileInfo = (props: ProfileInfoType) => {
  if (!props.profile) return <Preloader/>
  return (
      <>
        <div className={s.bg}>
          <img
              src="https://i.ytimg.com/vi/yLRaDfPSB-4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJJjQdF_u5FifTIMKMDhilm3S0hA"
              alt=""/>
        </div>
        <Description saveProfile={props.saveProfile} isOwner={props.isOwner} saveAvatar={props.saveAvatar} profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
      </>
  )
}