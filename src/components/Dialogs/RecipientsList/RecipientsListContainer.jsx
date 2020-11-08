import React from 'react';
import {RecipientsList} from "./RecipientsList";
import RecipientContainer from "../Recipient/RecipientContainer";
import {StoreContext} from "../../../StoreContext";
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-page-reducer";
// import UserPosts from "../../Profile/UserPosts/UserPosts";


export const RecipientsListContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();


                let mapRecipientsElements =
                    state.dialogsPage.recipientsData
                        .map(recipient => {
                                return (
                                    <RecipientContainer
                                        name={recipient.name}
                                        id={recipient.id}/>
                                )
                            }
                        );

                return <RecipientsList mapRecipientsElements={mapRecipientsElements}/>
            }
            }

        </StoreContext.Consumer>
    );
}


