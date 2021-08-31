import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Header.css"

class Header extends React.Component {
    render () {
        return <header className="App-header">
        <Link to="/"><div className="logo" alt="logo"></div></Link>
        <nav>
            <Link className="navLink" to="/">Accueil</Link>
            <Link className="navLink" to="/About/">A propos</Link>
        </nav>
        </header>
    }
}

export default Header
