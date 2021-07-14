import React, { useContext, useReducer } from 'react'
import Store from './Store/context'
import reducer from './Store/reducer'

const CommentLayout = ({ children }) => {
    const globalState = useContext(Store)
    const [state, dispatch] = useReducer(reducer, globalState)

    return (
        <Store.Provider value={{ state, dispatch }}>
            <ul className="comment">
                {children}
            </ul>
        </Store.Provider>
    )
}

export default CommentLayout