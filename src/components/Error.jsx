import React from "react";
import { Link } from "react-router-dom";

class Error extends React.Component {
    render() {
        return (
            <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                <h1 style={{fontSize:"288px", color:"#FF6060"}}className="404title">404</h1>
                <p style={{fontSize:"36px",color:"#FF6060"}}>Oups ! La page que vous demandez n'existe pas</p>
                <Link style={{fontSize:"18px",color:"#FF6060",marginTop:"182px"}}rel="stylesheet" to="/">
                    Retourner sur la page d'accueil
                </Link>
            </div>
        );
    }
}

export default Error;
