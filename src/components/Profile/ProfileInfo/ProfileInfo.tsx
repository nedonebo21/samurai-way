import s from "./ProfileInfo.module.css";
import {Description} from "../Description/Description";
import React from "react";

export const ProfileInfo = () => {
    return (
        <>
            <div className={s.bg}>
                {/*<img*/}
                {/*    src="https://i.ytimg.com/vi/yLRaDfPSB-4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJJjQdF_u5FifTIMKMDhilm3S0hA"*/}
                {/*    alt=""/>*/}
            </div>
            <Description/>
        </>
    )
}