import React,{useContext} from 'react'
import CommentItem from './CommentItem'
import Store from './Store/context'

const CommentList = () => {
    /*const list = [
        {userid:'web7722', content:'안녕',date:'2021-08-06'},
        {userid:'web7722', content:'안녕2',date:'2021-08-06'},
        {userid:'web7722', content:'안녕3',date:'2021-08-06'},
        {userid:'web7722', content:'안녕4',date:'2021-08-06'},
        {userid:'web7722', content:'안녕5',date:'2021-08-06'},
    ]*/

    const {state} = useContext(Store)       //{state,dispatch}
    const list = state.commentItem

    const Item = list.map((v,k)=>{
        return(
            <CommentItem
                key = {k}
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