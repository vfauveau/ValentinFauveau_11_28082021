import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";

class Error extends React.Component {
    render() {
        return (
            <div className="Error-container">
                <h1 className="Error-title">404</h1>
                <p className="Error-message">Oups ! La page que vous demandez n'existe pas</p>
                <Link className="Error-redirectLink" rel="stylesheet" to="/">
                    Retourner sur la page d'accueil
                </Link>
            </div>
        );
    }
}

export default Error;
