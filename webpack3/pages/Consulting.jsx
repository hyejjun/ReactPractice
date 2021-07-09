import React, { Component } from 'react';
import '../css/Consulting.css'
import Consult from './Consult';
import SubMenu from '../component/SubMenu';
import SubpageTitle from '../component/SubpageTitle';
import Privacy from '../component/Privacy';
import RequestForm from '../component/RequestForm';

class Consulting extends Component {

    render() {
        return (
            <>
                <div className="project_wrap">
                    <div className="project_center">
                        <SubMenu />
                        <div className="consult_content">
                            {/* <SubpageTitle /> */}
                            <div className="consult_title">상담신청</div>
                            <Privacy />
                            <RequestForm />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Consulting


/*
    여기서 타이틀 /개인정보취급 / 상담정보 각각 컴포넌트로 나눠봐야함
    Childern 활용해서 해보자
*/