import React from 'react'
import CommentItem from './CommentItem'

const CommentList = () => {
    const list = [
        {userid:'web7722', content:'안녕',date:'2021-08-06'},
        {userid:'web7722', content:'안녕2',date:'2021-08-06'},
        {userid:'web7722', content:'안녕3',date:'2021-08-06'},
        {userid:'web7722', content:'안녕4',date:'2021-08-06'},
        {userid:'web7722', content:'안녕5',date:'2021-08-06'},
    ]

    const Item = list.map((v,k)=>{
        return(
            <CommentItem
                userid = {v.userid}
                content = {v.content}
                date = {v.date}
            />
        )
    })
    return (
        <li>
            {Item}
        </li>
    )
}

export default CommentList