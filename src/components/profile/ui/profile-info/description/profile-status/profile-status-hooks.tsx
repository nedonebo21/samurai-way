import * as React from 'react';
import {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusPropsType = {
  status: string
  updateStatusThunk: (status: string) => void
}

export const ProfileStatusHooks = (props: ProfileStatusPropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const handleEditMode = () => {
    if (!editMode){
      setEditMode(true)
    } else {
      setEditMode(false)
      props.updateStatusThunk(status)
    }
  }
  const handleChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return (
      <div>
        {!editMode
            ?
            <div>
              <span onDoubleClick={handleEditMode}>{props.status || 'No status'}</span>
            </div>
            :
            <div>
              <input type="text" onChange={handleChangeStatus} onBlur={handleEditMode} autoFocus
                     value={status}/>
            </div>
        }
      </div>
  )
}