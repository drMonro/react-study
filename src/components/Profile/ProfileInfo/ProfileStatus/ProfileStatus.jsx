import React from 'react';

export class ProfileStatus extends React.Component {

    state = {

        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {

        console.log(this.props.status)
        console.log(this.state.status)
        this.setState({
            editMode: true
        });
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render ()  {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <p onDoubleClick={this.activateEditMode} >{this.props.status || "-----"}</p>
                </div>
                }
                {this.state.editMode &&
                <form>
                    <p>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deActivateEditMode}
                            value={this.state.status}/>
                    </p>
                </form>
                }
            </>
        )
    }
}
