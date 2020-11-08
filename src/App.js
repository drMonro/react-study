import React from 'react';
import './App.css';
// import styles from './Dialogs.module.css'
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    // debugger
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <div className="app-wrapper-content">
                {/*<Route path={'/profile'} render={() => {*/}
                {/*    return (*/}
                {/*        <Profile/>*/}
                {/*    )*/}
                {/*}}/>*/}
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs/>}/>

                {/*<Route path={'/dialogs'} render={() => {*/}
                {/*    return (*/}
                {/*        <Dialogs/>*/}
                {/*    )*/}
                {/*}}/>*/}
            </div>

        </div>
    );
}

export default App;
