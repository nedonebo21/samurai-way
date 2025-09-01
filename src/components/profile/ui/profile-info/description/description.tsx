import React, {ChangeEvent, useState} from 'react';
import s from './description.module.css'
import {ProfileAvatar} from "../../../../../shared/ui/profile-avatar/profile-avatar";
import {ProfileType} from "../../../../../shared/types";
import {ProfileStatusHooks} from "./profile-status/profile-status-hooks";
import {Button} from "../../../../../shared/ui/button/button";
import {
  FormDataProfileType,
  ProfileDataReduxForm
} from "./profile-status/profile-data-form/profile-data-form";

type DescriptionType = {
  profile: ProfileType
  status: string
  updateStatusThunk: (status: string) => void
  isOwner: boolean
  saveAvatar: (file: File) => void
  saveProfile: (formData: FormDataProfileType) => Promise<void>
}

export const Description = (props: DescriptionType) => {
  const [editMode, setEditMode] = useState(false)

  const handleAvatarSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      props.saveAvatar(e.target.files[0])
    }
  }
  const toggleEditMode = () => {
    setEditMode(prevState => !prevState)
  }

  const onSubmit = (formData: FormDataProfileType) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }

  return (
      <div className={s.description}>
        <ProfileAvatar avatarUrl={props.profile.photos?.large}/>
        <div className={s.info}>
          {
              props.isOwner &&
              <div className={s.avatar_changer}>
                Change Avatar:
                <input type="file" onChange={handleAvatarSelect}/>
              </div>
          }
          <ProfileStatusHooks status={props.status} updateStatusThunk={props.updateStatusThunk}/>

          {editMode ? <ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit}
                                            profile={props.profile}/> :
              <ProfileData toggleEditMode={toggleEditMode} profile={props.profile} isOwner={props.isOwner}/>}
        </div>
      </div>
  );
};

type ContactPropsType = {
  contactTitle: string
  contactValue: string | null
}
export const Contact = (props: ContactPropsType) => {
  return (
      <div className={s.desc_item}>
        <strong className={s.desc_sub_title}>{props.contactTitle}: </strong>
        {props.contactValue ?
            <a href={props.contactValue}>{props.contactValue}</a> : 'No Link'}
      </div>
  )
}

type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean
  toggleEditMode: () => void
}
const ProfileData = ({profile, isOwner, toggleEditMode}: ProfileDataPropsType) => {
  return (
      <>
        <div className={s.items_container}>
          <div className={s.desc_items}><strong className={s.desc_title}>Info:</strong>
            <div className={s.desc_item}><strong
                className={s.desc_sub_title}>Name: </strong>{profile.fullName}</div>
            <div className={s.desc_item}><strong className={s.desc_sub_title}>About
              Me: </strong>{profile.aboutMe}</div>
            <div className={s.desc_item}><strong className={s.desc_sub_title}>Looking For a
              Job: </strong> {profile.lookingForAJob ? 'Yes' : 'No'}</div>
            <div className={s.desc_item}><strong className={s.desc_sub_title}>Looking
              For: </strong>{profile.lookingForAJobDescription || 'No description'}
            </div>
          </div>
          <div className={s.desc_items}><strong className={s.desc_title}>Contacts:</strong>
            {Object.entries(profile.contacts).map(([key, value]) => {
              return <Contact key={key} contactTitle={key} contactValue={value}/>
            })}
          </div>
        </div>
        {isOwner && <Button onClick={toggleEditMode}>Edit profile</Button>}
      </>
  )
}