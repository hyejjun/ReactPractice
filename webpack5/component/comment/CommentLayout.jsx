import React from 'react'

const CommentLayout = ({ children }) => {
    return (
        <ul className="comment">
            {children}
        </ul>
    )
}

export default CommentLayout