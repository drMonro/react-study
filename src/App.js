import React from 'react';
import './App.css';
// import styles from './Dialogs.module.css'
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {UsersContainer} from "./components/Users/UsersContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <div className="app-wrapper-content">

                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>

            </div>

        </div>
    );
}

export default App;
