import React, { useState, useMemo, useCallback } from 'react'

const Memo = () => {
    const [username, setUsername] = useState('')
    const [list, setList] = useState([])

    const onChange = useCallback((e) => {
        let { value } = { ...e.target }
        setUsername(value)
    }, [])

    const submit = useCallback((e)=>{
        e.preventDefault()
        let newList = [...list]
        newList.push(username)
        setList(newList)
        setUsername('')
    },[list,username])

    const renderList = useCallback(()=>{
        return(
            list.map((v,k)=>{
                return(
                    <li key={k}>
                        {v}
                    </li>
                )
            })
        )
    })


    const listnum = useMemo(()=>{
        return list.length
    },[list.length])

    return (
        <div>
            <h2>참여자 명단({listnum})</h2>
            <form onSubmit={submit}>
                <input type="text" name="username" value={username} onChange={onChange} />
                <button type="submit">확인</button>
            </form>
            <ol>
                {renderList()}
            </ol>
        </div>
    )
}

export default Memo