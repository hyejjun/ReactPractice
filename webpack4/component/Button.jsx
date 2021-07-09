import React, { Component } from 'react'
import UserContext from '../store/User'

class Button extends React.Component {
    name = "ㅎㅇ"
    static contextType = UserContext    // 사용할때는 이렇게
    render() {
        console.log(this.context);
        return (
            <>
                <ul>
                    <li>{this.context.userid}</li>
                    <li>{this.context.name}</li>
                    <li>{this.context.job}</li>
                </ul>
                <button onClick={() => this.props.onClick(this.name)}>로그인</button>
                <button onClick={() => alert('userid : ' + this.context.userid)}>로그인2</button>
            </>
        )
    }
}

export default Button