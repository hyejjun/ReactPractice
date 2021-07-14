import React from 'react'
import CommentItem from './CommentItem'

const CommentList = () => {
    return (

        <li>
            <CommentItem
                userid="web7722"
                content="안녕하세용"
                date="2021-09-08"
            />
            <CommentItem
                userid="web7722"
                content="안녕하세용2"
                date="2021-09-08"
            />
            <CommentItem
                userid="web7722"
                content="안녕하세용3"
                date="2021-09-08"
            />
        </li>

    )
}

export default CommentList