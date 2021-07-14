import React, { useContext, useReducer } from 'react'
import Store from './Store/context'
import reducer from './Store/reducer'

const CommentLayout = ({ children }) => {
    const globalStore = useContext(Store)       // 이렇게 하면 initialState 안에 있던 내용들이 여기로 들어옴
    //console.log('context value',globalStore);

    const [state, dispatch] = useReducer(reducer, globalStore)       // 그걸 편집할 수 있도록 reducer로 선언
    //console.log('state value',state);

    return (
        <Store.Provider value={{state,dispatch}}>   {/* 하위컴포넌트에서 사용할 수 있도록 해줌 */}
            <ul className="comment">
                {children}
            </ul>
        </Store.Provider>
    )
}

export default CommentLayout