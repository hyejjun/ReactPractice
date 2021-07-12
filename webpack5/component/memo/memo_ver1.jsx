import React, { useState, useMemo, useCallback } from 'react'

const Memo = () => {
    const [username, setUsername] = useState('')   //React 가 빠진 이유는 위에 import 때문
    const [list, setList] = useState([])

    
    const change = (e) => {
        let { value } = { ...e.target }
        setUsername(value)
    }
    
    const submit = (e) => {
        e.preventDefault()
        const newList = [...list]
        newList.push(username)
        setList(newList)
        setUsername('')
    }
    
    const renderList = () => {
        return(
            list.map((v,k)=>{
                return <li key={k}>{v}</li>
            })
        )
    }

    const userCount = useMemo (()=>{
        return list.length
    },[list.length])

    return (
        <>
            <h2>회원리스트 ({userCount})</h2>
            <form onSubmit={submit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={change}
                />
                <button type="submit">
                    추가
                </button>
            </form>
            <ol>
                {
                    renderList()
                }
            </ol>
        </>
    )
}

export default Memo
