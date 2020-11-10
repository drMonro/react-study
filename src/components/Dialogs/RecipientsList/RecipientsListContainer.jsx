import React from 'react';
import {RecipientsList} from "./RecipientsList";
import RecipientContainer from "../Recipient/RecipientContainer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    let mapRecipientsElements =
        state.dialogsPage.recipientsData
            .map(recipient => {
                    return (
                        <RecipientContainer
                            name={recipient.name}
                            id={recipient.id}
                            key={recipient.id}/>
                    )
                }
            );

    return {
        recipientsElements: mapRecipientsElements
    }
}

export const RecipientsListContainer = connect(mapStateToProps)(RecipientsList);


