import React, { useState, useContext } from 'react'
import CommentItem from './CommentItem'
import Store from './Store/context'

const CommentList = () => {
    const { state, dispatch } = useContext(Store)
    const list = [...state.commentItem]

    const onUpdate = () => {
        let list_c = [...list]
        console.log(list_c);
    }

    const onDelete = (data) => {
        let newList = list.filter((value, index) => {
            return data !== index
        })
        dispatch({
            type: 'DELETE',
            payload: newList
        })
    }

    const inputBox = (content1) => {
        return (
            <input
                type="text"
                className="comment-update-input"
                name="content"
                defaultValue={content1}
                onChange={handleChange}
                onKeyDown={handleEnter}
            />
        )
    }

    const Item = list.map((v, k) => {
        return (
            <CommentItem
                key={k}
                userid={v.userid}
                content={v.content}
                date={v.date}
                onDelete={onDelete}
                onUpdate={onUpdate}
                k={k}
                inputBox ={inputBox}
            />
        )
    })

    return (
        <>
            {Item}
        </>
    )
}

export default CommentList