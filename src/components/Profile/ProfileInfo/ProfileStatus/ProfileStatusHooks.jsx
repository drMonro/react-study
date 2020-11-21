import React, {useEffect, useState} from 'react';

export const ProfileStatusHooks = (props) => {

    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    },[props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deActivateEditMode = () => {
        setEditMode(false);

        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            { !editMode &&
                <div>
                    <p onDoubleClick={activateEditMode}>{props.status || "-----"}</p>
                </div>
            }
            {editMode &&
            <form>
                <p>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deActivateEditMode}
                        value={status}/>
                </p>
            </form>
            }
        </div>
    )

}
