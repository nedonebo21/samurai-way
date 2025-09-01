import {ProfileType} from "../../../../../../../shared/types";
import s from "../../description.module.css";
import s2 from '../../../../../../login/ui/login-form/login-form.module.css'
import {Button} from "../../../../../../../shared/ui/button/button";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../../../../../../shared/ui/input/input";
import {Textarea} from "../../../../../../../shared/ui/textarea/textarea";

type ProfileDataFromPropsType = {
  profile: ProfileType
}
export type FormDataProfileType = {
  fullName: string
  aboutMe: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
}
export const ProfileDataForm = (
    {
      profile,
      handleSubmit, error
    }: InjectedFormProps<FormDataProfileType, ProfileDataFromPropsType> & ProfileDataFromPropsType) => {
  return (
      <form onSubmit={handleSubmit}>
        <div className={s.items_container}>
          <div className={s.desc_items}><strong className={s.desc_title}>Info:</strong>
            <div className={s.desc_item}>
              <strong className={s.desc_sub_title}>Name: </strong>
              <Field placeholder={'Full Name'} name={'fullName'} validators={[]} component={Input}/>
            </div>
            <div className={s.desc_item}>
              <strong className={s.desc_sub_title}>About Me: </strong>
              <Field placeholder={'About Me'} name={'aboutMe'} validators={[]} component={Input}/>
            </div>
            <div className={s.desc_item}>
              <strong className={s.desc_sub_title}>Looking For a Job: </strong>
              <Field placeholder={''} name={'lookingForAJob'} validators={[]} component={Input} type={'checkbox'}/>
            </div>
            <div className={s.desc_item}>
              <strong className={s.desc_sub_title}>Looking For:</strong>
              <Field placeholder={'Looking For'} name={'lookingForAJobDescription'} validators={[]} component={Textarea}/>
            </div>
          </div>
          <div className={s.desc_items}><strong className={s.desc_title}>Contacts:</strong>
            <div>Contacts</div>: {Object.entries(profile.contacts).map(([key, value]) => {
              return (
                  <div className={s.desc_item}>
                    <strong className={s.desc_sub_title}>{key}: </strong>
                    <Field placeholder={`${key} link`} name={`contacts.${key}`} validators component={Input}/>
                  </div>
              )
            })}
          </div>
        </div>
        <Button onClick={() => {
        }}>Save</Button>
        {error && <div className={s2.form_error}>{error}</div>}
      </form>
  )
}

export const ProfileDataReduxForm = reduxForm<FormDataProfileType, ProfileDataFromPropsType>({form: 'edit-profile'})(ProfileDataForm)