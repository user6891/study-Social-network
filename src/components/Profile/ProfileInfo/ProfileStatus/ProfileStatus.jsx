import React, { useState, useEffect } from 'react';

function ProfileStatus(props) {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const disabledEditMode = () => {
    setEditMode(false);
    props.setProfileStatus(status);
  };

  const onChangeStatus = (e) => {
    console.log(e.currentTarget.value);
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    console.log('useEffect');
    setStatus(props.status)
  }, [props.status])
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || '----------'}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onChangeStatus}
            autoFocus={true}
            onBlur={disabledEditMode}
            type="text"
            value={status}
          />
        </div>
      )}
    </div>
  );
}

export default ProfileStatus;
