import React, { Component } from 'react';
import {connect} from 'react-redux';
import { validateUser } from '../actions/UserActions';
import {bindActionCreators} from 'redux';

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

    render() {
        return (
            <div className="row">
                <div className="col-md-5">
                    <form onSubmit={this.submit}>
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
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        user: state.userState
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({validateUser}, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (User);
