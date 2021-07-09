import React from 'react'

const User = {
    userid : 'web7722',
    name : 'ingoo'
}
const UserContext = React.createContext(User)     
// default 값을 넣어놓는다. string도 되고 이렇게 객체도됨

export default UserContext

