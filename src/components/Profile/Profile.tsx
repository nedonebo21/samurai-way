import React from "react";
import s from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://i.ytimg.com/vi/yLRaDfPSB-4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJJjQdF_u5FifTIMKMDhilm3S0hA"
                    alt=""/>
            </div>
            <div>
                ava + descr
            </div>
            <div>
                my posts
                <div>
                    New Post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>Post1</div>
                    <div className={s.item}>Post2</div>
                    <div className={s.item}>Post3</div>
                </div>
            </div>
        </div>
    )
}