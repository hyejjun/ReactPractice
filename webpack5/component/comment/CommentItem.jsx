// ul li 댓글 부분 겹치는거 컴포넌트로 뺀 부분임
import React, { useContext, useState } from 'react'
import Store from './Store/context'
//Context 사용하려면 React.useContext 와 Store를 가져오자

const CommentItem = ({ userid, content, date, index }) => {
    const { state, dispatch } = useContext(Store)
    const [input, setInput] = useState('')

    const handleDelete = () => {
        dispatch({ type: 'DELETE', payload: index })
    }

    const handleClick = () => {
        setInput(content)       // props 에서 받은 content
    }

    const handleChange = (e) => {
        const {value} = {...e.target}
        setInput(value)
    }

    const handleKeydown = (e)=>{
        //console.log(e.key); 
        if(e.key === 'Enter'){
            dispatch ({
                type : 'UPDATE',
                payload : {
                    index,
                    content : input
                }
            })
            setInput('')
        }
    }

    return (
        <>
            <ul className="comment-row">
                <li className="comment-id">{userid}</li>
                <li className="comment-content">
                    <span onClick={handleClick}>
                        {
                            input
                                ? <input
                                    type="text"
                                    value={input}
                                    className="comment-update-input"
                                    onChange={handleChange}
                                    onKeyDown = {handleKeydown}
                                />
                                : content
                        }
                    </span>

                    <span className="comment-delete-btn" onClick={handleDelete}>
                        X
                    </span>
                </li>
                <li className="comment-date">{date}</li>
            </ul>
        </>
    )
}

export default CommentItem