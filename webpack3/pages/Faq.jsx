import React, { Component } from 'react'
import SubMenu from '../component/SubMenu'

class Faq extends Component {
    render() {
        return (
            <div className="project_wrap">
                <div className="project_center">
                    <SubMenu />
                    <div className="consult_content">
                        <div className="consult_title">자주묻는질문</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Faq