import React, { useContext, useState } from 'react'

const CommentItem = ({ userid, content, date, onDelete, k, onUpdate, inputBox}) => {
    const handleClick = (e) => {
        console.log(e.target);
    }
    return (
        <>
            <ul className="comment-row">
                <li className="comment-id">{userid}</li>
                <li className="comment-content">
                    <span onClick={handleClick}>
                        {content}
                    </span>
                    <span
                        className="comment-delete-btn"
                        onClick={() => { onDelete(k) }}
                    >
                        X
                    </span>
                </li>

                <li className="comment-date">{date}</li>
            </ul>
        </>
    )
}
// k랑 key값 비교하는거를 못했어요 수정 부분에서 어떤 화면요?
export default CommentItem