import React from 'react'

const initialState = {
    commentItem : [
        {userid :'web7722', content : 'aaa', date: "2021-09-08"},
    ],
}

const Store = React.createContext(initialState)

export default Store