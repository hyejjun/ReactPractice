import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css/SubMenu.css'

class SubMenu extends Component {
    state = {
        list: [
            [
                {
                    id: 1,
                    url: '/consult',
                    menu: '상담게시판'
                },
                {
                    id: 2,
                    url: '/apply',
                    menu: '지원하기'
                },
                {
                    id: 3,
                    url: '/faq',
                    menu: '자주묻는질문'
                }
            ]
        ]
    }
    render() {
        return (
            <>
                <div className="submenu">
                    <ul>
                        {
                            this.state.list[0].map(item => {
                                let {id, url, menu} = item
                                return(
                                    <li key={id}>
                                        <Link to={url}>{menu}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </>
        )
    }
}

export default SubMenu