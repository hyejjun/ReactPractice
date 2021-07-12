import React, { useState, useMemo, useCallback } from 'react'

const Memo = () => {

    const [username, setUsername] = useState('')
    const [list, setList] = useState([])

    const change = useCallback((e) => {
        let { value } = { ...e.target }
        setUsername(value)
    }, [])

    const submit = useCallback((e) => {
        e.preventDefault()
        const newList = [...list]
        newList.push(username)
        setList(newList)
        setUsername('')
    }, [list, username])

    const renderList = useCallback((v, k) => {
        let newArr = list.map((v, k) => {
            return (
                <li key={k}>{v}</li>
            )
        })
        return newArr
    }, [list])


    const userCount = useMemo(() => {
        return list.length
    }, [list.length])

    return (
        <>
            {console.log('render')}
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
