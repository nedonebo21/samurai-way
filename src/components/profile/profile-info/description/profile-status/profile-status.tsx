import * as React from 'react';

type ProfileStatusPropsType = {
  status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false
  }
  toggleEditMode = () => {
    if (!this.state.editMode) {
      this.setState({editMode: true})
    } else {
      this.setState({editMode: false})
    }
  }

  render() {
    return (
        <div>
          {!this.state.editMode
              ?
              <div>
                <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>
              </div>
              :
              <div>
                <input type="text" onBlur={this.toggleEditMode} autoFocus value={this.props.status}/>
              </div>
          }
        </div>
    )
  }
}