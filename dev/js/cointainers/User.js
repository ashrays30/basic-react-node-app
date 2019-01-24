import React, { Component } from 'react';
import {connect} from 'react-redux';
import { validateUser } from '../actions/UserActions';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom';

class User extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {
            username: "",
            pass: ""
        }
    }

    submit() {
        this.props.actions.validateUser(this.state);
        return false;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        const currentState = this.props.userState;
        const previousState = prevProps.userState;
        if(currentState != previousState){
            console.log(currentState)
            if(currentState.status){
                this.props.history.push('/posts');
                return false;
            }
        }
        return true;
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-5">
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" onChange={(e) => {
                                this.setState({username: e.target.value})
                                }} className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" onChange={(e) => {
                                this.setState({pass: e.target.value})
                                }} className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-check">

                        </div>
                        <button type="button"  onClick={this.submit} className="btn btn-primary">Submit</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userState: state.userState
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({validateUser}, dispatch)
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (User));
