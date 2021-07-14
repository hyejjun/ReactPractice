import React from 'react'
// ul li 댓글 부분 겹치는거 컴포넌트로 뺀 부분임

const CommentItem = ({userid,content,date}) => {
    return (
        <>
            <ul className="comment-row">
                <li className="comment-id">{userid}</li>
                <li className="comment-content">{content}</li>
                <li className="comment-date">{date}</li>
            </ul>
        </>
    )
}

export default CommentItem