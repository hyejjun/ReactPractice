import React, { useContext, useReducer, useEffect } from 'react'
import Store from './Store/context'
import reducer from './Store/reducer'
import {getComment} from './api/api'

const CommentLayout = ({ children }) => {
    const globalStore = useContext(Store)       // 이렇게 하면 initialState 안에 있던 내용들이 여기로 들어옴 - globalStore 변수는 Store 안에 있는 값을 가져오기 위해서 잠깐 쓰는것
    //console.log('context value',globalStore);

    const [state, dispatch] = useReducer(reducer, globalStore)       // 그걸 편집할 수 있도록 reducer로 선언
    //console.log('state value',state);

    // hooks에서 사용하는 생명주기 - 최초 실행일때만 실행된다.
    /*useEffect(async ()=>{
        //console.log('최초실행');
        const response = await fetch('http://localhost:3000/api')   // response는 성공 실패의 결과값만 주므로 data라는 걸로 json값을 받아와야한다
        const data = await response.json()
        console.log(data);
        dispatch({type :'INIT', payload : data})
    },[])  */
    
    useEffect(async ()=>{
        getComment(dispatch)
    },[])
    

    return (
        <Store.Provider value={{state,dispatch}}>   {/* Store.Provider = 하위컴포넌트에서 사용할 수 있도록 해줌 */}
            <ul className="comment">
                {children}
            </ul>
        </Store.Provider>
    )
}

export default CommentLayout