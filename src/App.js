import React from 'react';
import './App.css';
// import styles from './Dialogs.module.css'
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <div className="app-wrapper-content">

                <Route path={'/profile'} render={() => <ProfileContainer/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>

            </div>

        </div>
    );
}

export default App;
