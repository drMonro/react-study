import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {sendMessageActionCreator} from "../../redux/dialogs-page-reducer";


const mapStateToProps = (state) => {
    return {
        // newMessageText: state.dialogsPage.newMessageText,
        test: "test"
    }
}

const mapDispatchToProps = (dispatch) => {
    let onSendMessage = (values) => {
        dispatch(sendMessageActionCreator(values.newMessageText));
    }

    return {
        onSendMessage: onSendMessage,
    }
}

export const DialogsContainer =  compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
