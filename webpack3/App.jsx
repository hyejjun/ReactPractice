import React, { Component } from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Consult from './pages/Consult'
import Consulting from './pages/Consulting'
import Apply from './pages/Apply'
import Faq from './pages/Faq'

class App extends Component {
    render() {
        return (
            <>
                {/* BrowserRouter : div root라고 생각하면 됨 최상위 엘리먼트 */}
                <BrowserRouter>
                    <Navbar />
                    {/* 여기서부터 내용 보이는 영역 */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/consult" component={Consulting} />
                        <Route path="/apply" component={Apply} />
                        <Route path="/faq" component={Faq} />
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}

export default App