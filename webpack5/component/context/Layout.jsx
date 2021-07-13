import React from 'react'
import LayoutStore,{LayoutContext} from './LayoutContext'

const Layout = () => {
    return (
        <>
            <LayoutStore>
                <LoginBox />
            </LayoutStore>
        </>
    )
}
const LoginBox = () => {
    return (
        <>
            <Login />
        </>
    )
}
const Login = () => {
    return (
        <>
            <Button />
        </>
    )
}
const Button = () => {
    const context = React.useContext(LayoutContext)     // value 값 web7722 를 받을 수 있게 처리함
    return (
        <>
            <button>{context.userid}</button>
            <ul>
                <li>{context.userid}</li>
                <li>{context.username}</li>
                <li>{context.job}</li>
            </ul>
        </>
    )
}

export default Layout