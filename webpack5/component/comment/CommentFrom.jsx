import React, { useContext, useState } from 'react'
import Store from './Store/context'

const CommentForm = () => {
    const [input, setInput] = useState('')
    const { state, dispatch } = useContext(Store)     //다른 파일에 있는애들 사용하겠다- 비구조 할당문으로 받아옴 - Layout에서 바로 Form 으로 값을 전달한거다. 

    const handleChange = (e) => {
        const { value } = { ...e.target }
        setInput(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'CREATE', payload: { userid: 'web7722', content: input, date: '2021-07-14' } })
        setInput('')
    }
    return (
        <>
            <li className="comment-form">
                <form onSubmit={handleSubmit}>
                    <span className="ps_box">
                        <input
                            type="text"
                            className="int"
                            placeholder="댓글을 입력해주세요"
                            onChange={handleChange}
                            value={input}
                        />
                    </span>
                    <button
                        type="submit"
                        className="btn"
                    >
                        등록
                    </button>
                </form>
            </li>
        </>
    )
}

export default CommentForm