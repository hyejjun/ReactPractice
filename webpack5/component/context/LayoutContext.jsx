import React from 'react'

// context 생성하기
export const LayoutContext = React.createContext()     // 하나의 Component 를 생성했다고 보면 된다

// component 생성
const LayoutStore = (props) => {
    const user = {
        userid : 'web7722',
        username : 'ingoo',
        job : 'developer'
    }

    // value : 기본값으로 뭘 보낼지
    return(
        <LayoutContext.Provider value={user}>   
            {props.children}
        </LayoutContext.Provider>
    )
}

export default LayoutStore