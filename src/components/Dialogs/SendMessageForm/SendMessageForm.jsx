import React from 'react';


export const SendMessageForm = (props) => {
// debugger
    return (
        <form>
            <textarea value={props.newMessageText} onChange={props.updateMessageText}/>
            <button onClick={props.sendMessage} type={"button"}>Send message</button>
        </form>
    );
}
