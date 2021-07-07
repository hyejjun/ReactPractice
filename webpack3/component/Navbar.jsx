import React, { Component } from 'react'
import '../css/Navbar.css'
import { FaFacebook, FaInstagram, FaBeer, FaTwitter, FaBars } from 'react-icons/fa'
import { CgClose } from "react-icons/cg";
import NavToggle from './NavToggle'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    state = {
        social: [
            {
                id: 1,
                url: 'https://www.twitter.com',
                icons: <FaTwitter />
            },
            {
                id: 2,
                url: 'https://www.facebook.com',
                icons: <FaFacebook />
            },
            {
                id: 3,
                url: 'https://www.instagram.com',
                icons: <FaInstagram />
            },
        ],

        menu: [
            {
                id: 1,
                url: '/',
                text: 'home'
            },
            {
                id: 2,
                url: '/about',
                text: 'about'
            },
            {
                id: 3,
                url: '/projects',
                text: 'project'
            },
            {
                id : 4,
                url : '/consult',
                text : 'consult'
            }
        ],

        flag: false,
        showLinks: false,

    }

    MobileNavi = (e) => {
        const menubar = document.querySelector('#links-container');
        let { flag } = this.state

        switch (flag) {
            case true:
                menubar.setAttribute('class', 'links-container')
                this.setState({ flag: false })
                break;

            case false:
                menubar.setAttribute('class', 'open')
                this.setState({ flag: true })
                break;
            default:
                break;
        }
    }

    showContainer = (e) => {
        let className = this.state.showLinks ? 'links-container on' : 'links-container'
        return className
    }
    handleToggle = (e) => {
        this.setState({showLinks:!this.state.showLinks})
    }
    render() {
        return (
            <nav>
                <div className="nav-center">
                    {/* Logo */}
                    <div className="nav-header">
                        <h1 className="logo">Logo</h1>
                        {/* <button className="nav-toggle" onClick={this.MobileNavi}>
                            {this.state.flag ? <CgClose/> : <FaBars />}
                        </button> */}
                        <NavToggle toggle={this.handleToggle} />
                    </div>

                    {/* Navigation */}
                    <div id="links-container" className={this.showContainer()}>
                        <ul className="links">
                            {
                                this.state.menu.map(item => {
                                    const { id, url, text } = item
                                    return (
                                        <li key={id}>
                                            <Link to={url}>{text}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <ul className="social-icons">
                        {
                            this.state.social.map(item => {
                                const { id, url, icons } = item    //비구조 할당문
                                return (
                                    <li key={id}>
                                        <a href={url}>{icons}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar