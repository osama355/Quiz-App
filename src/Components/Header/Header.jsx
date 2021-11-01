import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

function Header() {
    return (
        <div className="header">
            <Link to="/" className="headerContent">
                Quiz Application
            </Link>
        </div>
    )
}

export default Header;
