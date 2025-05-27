import React from "react";
import {ProfileInfo} from "../components/profile/profile-info/profile-info";
import {MyPostsContainer} from "../components/profile/my-posts/my-posts-container";
import {StoreType} from "../redux/redux-store";

// export type ProfilePageProps = ProfilePageType & {
//     dispatch: (action: ActionsType) => void
// }
export type ProfilePageProps = {
    store: StoreType
}

export const ProfilePage = (props: ProfilePageProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}