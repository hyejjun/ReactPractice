import React from 'react'

const CommentForm = () => {
    return (
        <>
            <li className="comment-form">
                <form>
                    <span className="ps_box">
                        <input
                            type="text"
                            className="int"
                            placeholder="댓글을 입력해주세요"
                        />
                    </span>
                    <button
                        type="submit"
                        className="btn"
                    >
                        등록
                    </button>
                </form>
            </li>
        </>
    )
}

export default CommentForm