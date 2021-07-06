import React from 'react'
import ReactDOM  from 'react-dom'
import App from './app' 
import './css/index.css'        // index.jsx 기준으로 css import 하기     


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)