import React from 'react';
import s from './description.module.css'
import {ProfileAvatar} from "../../../../shared/ui/profile-avatar/profile-avatar";
import {ProfileType} from "../../../../redux/types/state-types";

type DescriptionType = {
    profile: ProfileType
}

export const Description = (props:DescriptionType) => {
    return (
        <div className={s.description}>
            <ProfileAvatar avatarUrl={props.profile.photos.large}/>
            <div className={s.info}>
                <strong>Info</strong>
                <div><strong>Name:</strong> {props.profile.fullName}</div>
                <div><strong>About Me</strong>: {props.profile.aboutMe}</div>
                <div><strong>Looking For a Job</strong>: {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
                <div><strong>Looking For</strong>: {props.profile.lookingForAJobDescription || 'No description'}</div>
                <div><strong>Contacts</strong>:
                    <div><strong>FaceBook</strong>: {props.profile.contacts.facebook || 'No Link'}</div>
                    <div><strong>WebSite</strong>: {props.profile.contacts.website || 'No Link'}</div>
                    <div><strong>VK</strong>: {props.profile.contacts.vk || 'No Link'}</div>
                    <div><strong>Twitter</strong>: {props.profile.contacts.twitter || 'No Link'}</div>
                    <div><strong>Inst</strong>: {props.profile.contacts.instagram || 'No Link'}</div>
                    <div><strong>YT</strong>: {props.profile.contacts.youtube || 'No Link'}</div>
                    <div><strong>github</strong>: {props.profile.contacts.github || 'No Link'}</div>
                    <div><strong>MainLink</strong>: {props.profile.contacts.mainLink || 'No Link'}</div>
                </div>
            </div>
        </div>
    );
};