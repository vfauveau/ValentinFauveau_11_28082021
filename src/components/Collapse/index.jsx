import React from "react";
import arrow from "../../pictures/CarouselArrow.png";
import "../../styles/Collapse.css";

function handleClick(e) {
    e.preventDefault();
    console.log('Le lien a été cliqué.');
  }

class Collapse extends React.Component {
    render() {
        return (
            <div className="collapsible">
                <button className="collapse-wrapper" onClick={handleClick}>
                    <div className="collapse-title">{this.props.title}</div>
                    <img className="collapse-arrow" alt="collapse-arrow" src={arrow}></img>
                </button>
                <div className="collapse-content">{this.props.text}</div>
            </div>
        );
    }
}

export default Collapse;
