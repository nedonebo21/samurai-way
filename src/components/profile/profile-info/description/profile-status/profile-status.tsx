import * as React from 'react';
import {ChangeEvent} from "react";

type ProfileStatusPropsType = {
  status: string
  updateStatusThunk: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
    status: this.props.status
  }
  toggleEditMode = () => {
    if (!this.state.editMode) {
      this.setState({editMode: true})
    } else {
      this.setState({editMode: false})
      this.props.updateStatusThunk(this.state.status)
    }
  }
  changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({status: e.currentTarget.value})
  }
  componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: typeof this.state) {
    if (prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
        <div>
          {!this.state.editMode
              ?
              <div>
                <span onDoubleClick={this.toggleEditMode}>{this.props.status || 'No status'}</span>
              </div>
              :
              <div>
                <input type="text" onChange={this.changeStatus} onBlur={this.toggleEditMode} autoFocus value={this.state.status}/>
              </div>
          }
        </div>
    )
  }
}