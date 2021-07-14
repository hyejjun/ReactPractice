import React from 'react'
import CommentLayout from './CommentLayout'
import CommentList from './CommentList'
import CommentForm from './CommentFrom'
import '../../css/example6.css'

const Comment = ()=>{
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