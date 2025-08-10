import React from 'react';
import s from './description.module.css'
import {ProfileAvatar} from "../../../../shared/ui/profile-avatar/profile-avatar";
import {ProfileType} from "../../../../shared/types/state-types";
import {ProfileStatusHooks} from "./profile-status/profile-status-hooks";

type DescriptionType = {
    profile: ProfileType
    status: string
    updateStatusThunk: (status: string) => void
}

export const Description = (props: DescriptionType) => {
    return (
        <div className={s.description}>
            <ProfileAvatar avatarUrl={props.profile.photos?.large}/>
            <div className={s.info}>
                <ProfileStatusHooks status={props.status} updateStatusThunk={props.updateStatusThunk}/>
                <div className={s.items_container}>
                    <div className={s.desc_items}><strong className={s.desc_title}>Info:</strong>
                        <div className={s.desc_item}><strong
                            className={s.desc_sub_title}>Name: </strong>{props.profile.fullName}</div>
                        <div className={s.desc_item}><strong className={s.desc_sub_title}>About
                            Me: </strong>{props.profile.aboutMe}</div>
                        <div className={s.desc_item}><strong className={s.desc_sub_title}>Looking For a
                            Job: </strong> {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
                        <div className={s.desc_item}><strong className={s.desc_sub_title}>Looking
                            For: </strong>{props.profile.lookingForAJobDescription || 'No description'}
                        </div>
                    </div>
                    <div className={s.desc_items}><strong className={s.desc_title}>Contacts:</strong>
                        <div className={s.desc_item}>
                            <strong className={s.desc_sub_title}>FaceBook: </strong>
                            {props.profile.contacts.facebook ?
                                <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a> : 'No Link'}
                        </div>
                        <div className={s.desc_item}>
                            <strong className={s.desc_sub_title}>WebSite: </strong>
                            {props.profile.contacts.website ?
                                <a href={props.profile.contacts.website}>{props.profile.contacts.website}</a> : 'No Link'}
                        </div>
                        <div className={s.desc_item}>
                            <strong className={s.desc_sub_title}>VK: </strong>
                            {props.profile.contacts.vk ?
                                <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a> : 'No Link'}
                        </div>
                        <div className={s.desc_item}>
                            <strong className={s.desc_sub_title}>Twitter: </strong>
                            {props.profile.contacts.twitter ?
                                <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a> : 'No Link'}
                        </div>
                        <div className={s.desc_item}>
                            <strong className={s.desc_sub_title}>Inst: </strong>
                            {props.profile.contacts.instagram ?
                                <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a> : 'No Link'}
                        </div>
                        <div className={s.desc_item}>
                            <strong className={s.desc_sub_title}>YT: </strong>
                            {props.profile.contacts.youtube ?
                                <a href={props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a> : 'No Link'}
                        </div>
                        <div className={s.desc_item}>
                            <strong className={s.desc_sub_title}>github: </strong>
                            {props.profile.contacts.github ?
                                <a href={props.profile.contacts.github}>{props.profile.contacts.github}</a> : 'No Link'}
                        </div>
                        <div className={s.desc_item}>
                            <strong className={s.desc_sub_title}>MainLink: </strong>
                            {props.profile.contacts.mainLink ?
                                <a href={props.profile.contacts.mainLink}>{props.profile.contacts.mainLink}</a> : 'No Link'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};