import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SubMenu from '../component/SubMenu'
import Consulting from './Consulting';
import Apply from './Apply';
import Faq from './Faq';
import '../css/Consult.css'

class Consult extends Component {
    render() {
        return (
            <div className="project_wrap">
                <div className="project_center">
                    <BrowserRouter>
                        <SubMenu />
                        <Switch>
                            <Route path='/consult' component={Consulting} />
                            <Route path='/apply' component={Apply} />
                            <Route path='/faq' component={Faq} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default Consult

/*
    이거는 여기서 이렇게 쓰면 안되고 App.jsx 에서 라우팅을 해야함
    두번 라우팅 하면 안좋음
*/