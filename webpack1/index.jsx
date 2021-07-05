import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import LoginBox from './loginBox'       

class App extends Component {
    render() {
        return (
            <>
                <div>hello babelㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹ</div>
                <LoginBox />
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)