import React from 'react';
import "../../styles/Thumbnail.css"
import { Link } from 'react-router-dom'
function handleClick(e) {
    console.log(e)
}

class Thumbnail extends React.Component {
    render() {
        return <Link to="Fiche-Logement">
        <div className="thumbnail-wrapper" onClick={() => handleClick(this.props.id)}>
            <img className="thumbnail-picture" src={this.props.cover} alt=""></img>
            <h4 className="thumbnail-title">{this.props.title}</h4>
        </div>
        </Link>
    }
}

export default Thumbnail