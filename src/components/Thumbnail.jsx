import React from "react";
import "../styles/Thumbnail.css";
import { Link } from "react-router-dom";

class Thumbnail extends React.Component {

    render() {
        return (
            <Link to={"/Fiche-Logement/" + this.props.id}>
                <div className="thumbnail-wrapper">
                    <img className="thumbnail-picture" src={this.props.cover} alt=""></img>
                    <h4 className="thumbnail-title">{this.props.title}</h4>
                </div>
            </Link>
        );
    }
}

export default Thumbnail;
