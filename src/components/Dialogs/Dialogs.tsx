import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog + ' ' + s.active}>4el 1</div>
                <div className={s.dialog}>4el 2</div>
                <div className={s.dialog}>4el 3</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Yo</div>
                <div className={s.message}>Its really your social network</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
};