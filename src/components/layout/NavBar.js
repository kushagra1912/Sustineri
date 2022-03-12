import React from 'react'
import Login from '../auth/Login'

const NavBar = () => {

    return (

        <nav >
            <div className="nav-wrapper light-green">
                <a className="brand-logo">Logo</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/points">{'About'}</a></li>
                    <li><Login /></li>
                    <li><a href="/profile">{'Signup'}</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar