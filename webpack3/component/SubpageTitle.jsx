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
                    link : '/consult',
                    title: '상담게시판'
                },
                {
                    id: 2,
                    link : '/apply',
                    title: '지원하기'
                },
                {
                    id: 3,
                    link : '/faq',
                    title: '자주묻는질문'
                }
            ]
        ]
    }

    render() {
        return (
            <>
                {/* {
                    this.state.list[0].map(item=>{
                        let {id, link, title} = item
                        return(
                            <span key={id}>
                                {title}
                            </span>
                        )
                    })
                } */}

                {/* <Consulting title = {this.state.list[0][0].title}/>
                <Apply title = {this.state.list[0][1].title}/>
                <Faq title = {this.state.list[0][2].title}/> */}
            </>
        )
    }
}

export default SubpageTitle