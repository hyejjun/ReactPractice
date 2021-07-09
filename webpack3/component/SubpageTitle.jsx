import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Consulting from '../pages/Consulting';
import Apply from '../pages/Apply';
import Faq from '../pages/Faq';
import { Link } from 'react-router-dom'

class SubpageTitle extends Component {
    state = {
        list: [
            [
                {
                    id: 1,
                    link: '/consult',
                    title: '상담게시판'
                },
                {
                    id: 2,
                    link: '/apply',
                    title: '지원하기'
                },
                {
                    id: 3,
                    link: '/faq',
                    title: '자주묻는질문'
                }
            ]
        ]
    }

    render() {
        return (
            <>
                {/* {
                    this.state.list[0].map(item => {
                        let { id, link, title } = item
                        return (
                            <div className="consult_title">
                                <span key={id}>
                                    {title}
                                </span>
                            </div>
                        )
                    })
                } */}
                {/* <div className="consult_title">상담게시판</div> */}
                <div className="consult_title">{this.state.list[0].title}</div>
            </>
        )
    }
}

export default SubpageTitle