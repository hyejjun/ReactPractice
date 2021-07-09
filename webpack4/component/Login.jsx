import React, { Component } from 'react'
import Button from './Button'
import UserContext from '../store/User'

class Login extends Component {
    static contextType = UserContext
    onClickHandle = (data) => {
        console.log(this.props.v, data)
    }

    arrowFunction(i) {
        console.log(i)
    }

    render() {
        return (
            <>
                <ul>
                    <li>{this.context.userid}</li>
                    <li>{this.context.name}</li>
                    <li>{this.context.job}</li>
                </ul>
                <Button onClick={(i) => this.arrowFunction(i)} />
            </>
        )

    }
}

export default Login