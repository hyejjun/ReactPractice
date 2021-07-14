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

export default CommentItem