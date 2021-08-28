import React from 'react';
import "../styles/Thumbnail.css"
function handleClick(e) {
    console.log(e)
}

class Thumbnail extends React.Component {
    render() {
        return <div className="thumbnail-wrapper" onClick={() => handleClick(this.props.id)}>
            <img className="thumbnail-picture" src={this.props.cover} alt=""></img>
            <h4 className="thumbnail-title">{this.props.title}</h4>
        </div>
    }
}

export default Thumbnail