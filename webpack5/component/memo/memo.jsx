import React, { useState, useMemo, useCallback } from 'react'

const Memo = () => {
    // 상태값 하는 input과 내용 저장을 위한거를 만들거임

    const [username, setUsername] = useState('')   //React 가 빠진 이유는 위에 import 때문
    const [list, setList] = useState([])

    /*
    const change = (e) => {
        let { value } = { ...e.target }
        setUsername(value)
    }
    */
    // usecallback을 사용해보기
    const change = useCallback((e)=>{
        let {value} = {...e.target}
        setUsername(value)
    },[])
    // 빈 배열일 경우엔 이 컴포넌트가 최초에 실행될때만 실행하겠다는 의미

    /*
    const submit = (e) => {
        console.log('submit');
        e.preventDefault()
        // list 를 가져올때 복사해서 가져오기 - 불변성
        // 얕은 복사하는게 목적
        const newList = [...list]
        //const newList = list.slice() - 이것도 복사 하는 방법
        newList.push(username)
        setList(newList)
        setUsername('')
    }
    */
    // useCallback 사용
    const submit = useCallback((e)=>{
        //console.log('usecallback submit');
        e.preventDefault()
        const newList = [...list]
        newList.push(username)
        setList(newList)
        setUsername('')
    },[list,username])
    // list 와 username 상태가 바뀔때만 함수를 재생성합니다.

    /*
    const renderList = () => {
        /* 첫번째 방법
        let newArr = []
        for (let i = 0; i < list.length; i++) {
            //list[i]     //asdfas -> <li>afsdfa</li>
            newArr.push(
                <li key={i}>{list[i]}</li>
            )
        }

        return newArr
        */

        /* 두번째 방법
        let newArr = list.map((v,k)=>{
            return <li key={k}>{v}</li>
        })
        return newArr
        

        // 세번째 방법
        return(
            list.map((v,k)=>{
                return <li key={k}>{v}</li>
            })
        )
    }
    */

    const renderList = useCallback((v,k)=>{
        let newArr = list.map((v,k)=>{
            return(
                <li key={k}>{v}</li>
            )
        })
        return newArr
    },[list])

    // const count = (arr) =>{
    //     return arr.length
    // }

    const userCount = useMemo (()=>{
         console.log('count');
        //  return count(list)
        return list.length
    },[list.length])

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
