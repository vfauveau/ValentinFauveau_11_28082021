import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <Link to="/">
                    <div className="logo" alt="logo"></div>
                </Link>
                <nav>
                    <Link className={`navLink ${this.props.styleName}`} to="/">
                        Accueil
                    </Link>
                    <Link className={`navLink ${this.props.styleName2}`} to="/About/">
                        A propos
                    </Link>
                </nav>
            </header>
        );
    }
}

export default Header;
