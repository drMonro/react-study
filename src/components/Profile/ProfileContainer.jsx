import React from 'react';
import {Profile} from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-page-reducer";

class ProfileContainer extends React.Component {
    // constructor(props) {
    //     debugger
    //     super(props);
    //     this.state.profilePage.profile = this.props.profile;
    //
    // }

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                // debugger
                this.props.setUserProfile(response.data);
            });
    }
    // componentWillMount() {
    //     axios
    //         .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
    //         .then(response => {
    //             // debugger
    //             this.props.setUserProfile(response.data);
    //         });
    // }

    render() {
        return this.props.profile && (
            <Profile {...this.props} profile={this.props.profile}/>
        );

        // return (
        //     <Profile {...this.props} profile={this.props.profile}/>
        // );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);
