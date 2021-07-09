import React, { Component } from 'react'
import Login from './Login'
import UserContext from '../store/User'

class LoginBox extends Component {
    static contextType = UserContext
    render() {
        return (
            <>
                <ul>
                    <li>{this.context.userid}</li>
                    <li>{this.context.name}</li>
                    <li>{this.context.job}</li>
                </ul>
                <Login v={this.props.v} />
            </>
        )
    }
}

export default LoginBox