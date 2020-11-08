import React from 'react';
import {Recipient} from "./Recipient";

const RecipientContainer = (props) => {
    let path = "/dialogs/" + props.id;
    let name = props.name;

    return (
        <Recipient
            path={path}
            name={name}
        />
    );
}

export default RecipientContainer;
