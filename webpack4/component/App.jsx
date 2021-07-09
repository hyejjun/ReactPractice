import React, { Component } from 'react'
import LoginBox from './LoginBox'
import UserContext from '../store/User'

class App extends Component {
    state = {
        loginTxt: 'login',
        user : {
            userid :'web7722',
            name : 'ingoo',
            job : 'developer'
        }
    }

    render() {// 이렇게 하면 LoginBox 밑으로 이 Context 내부 내용을 사용할 수 있다는 것이다
        return (
            <>
                <UserContext.Provider value={this.state.user}>
                    <LoginBox v={this.state.loginTxt} />
                </UserContext.Provider>
            </>
        )
    }
}

export default App