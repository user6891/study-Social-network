import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode() {
    this.setState({ editMode: true });
  }

  disabledEditMode() {
    this.setState({ editMode: false });
    this.props.setProfileStatus(this.state.status);
  }

  onChangeStatus = (e) => {
    console.log(e.currentTarget.value)
    this.setState({ status: e.currentTarget.value });
  };

   componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status || '----------'}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onChangeStatus}
              autoFocus={true}
              onBlur={this.disabledEditMode.bind(this)}
              type="text"
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
