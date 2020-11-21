import React from 'react';
import './App.css';
// import styles from './Dialogs.module.css'
import Navigation from "./components/Navigation/Navigation";
import  {withRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {LoginContainer} from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navigation/>
                <div className="app-wrapper-content">

                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/users'}
                           render={() => <UsersContainer/>}/>
                    <Route path={'/login'}
                           render={() => <LoginContainer/>}/>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);
