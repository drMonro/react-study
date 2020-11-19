import React from 'react';
import './App.css';
// import styles from './Dialogs.module.css'
import Navigation from "./components/Navigation/Navigation";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


const App = () => {
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
                       render={() => <Login/>}/>

            </div>

        </div>
    );
}

export default App;
