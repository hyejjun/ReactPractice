import React, { Component } from 'react'
import Classcomp from './component/ClassComp'
import FuncComp from './component/FuncComp'


class App extends Component {
    render() {
        return (
            <>
                <h1> hello React</h1>
                <ul className="Comp">
                    <Classcomp />
                    <FuncComp />
                    <Classcomp />
                    <FuncComp />
                </ul>
            </>
        )
    }
}

export default App  // import

//module.exports //require