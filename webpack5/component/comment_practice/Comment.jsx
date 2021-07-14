import React from 'react'
import '../../css/example6.css'
import CommentLayout from './CommentLayout'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

const Comment = () =>{
    return(
        <>
            <CommentLayout>
                <CommentForm/>
                <CommentList/>
            </CommentLayout>
        </>
    )
}

export default Comment