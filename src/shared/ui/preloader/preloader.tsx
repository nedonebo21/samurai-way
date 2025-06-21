import React from 'react';
import s from './preloader.module.css';
import preloader from "../../../assets/img/infinite-spinner.svg";

export const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt="preloaderGif"/>
        </div>
    )
}
