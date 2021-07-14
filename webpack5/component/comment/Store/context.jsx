import React from 'react'

// defalut 값보다 흔히 쓰이는 initalState
const initalState = {
    commentItem: [
        { userid: 'web7722', content: '안녕하세용', date: '2021-07-01' },
    ]
}
const Store = React.createContext(initalState)       //Context 생성해서 변수에 담음 - 인자값은 default값 or initalState

export default Store