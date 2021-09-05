import React from "react";
import "../../styles/Collapse.css";

function handleClickCollapse(e) {
    const collapseContent = e.target.nextElementSibling
    e.target.classList.toggle('collapse-button--active')
    if(e.target.classList.contains('collapse-button--active')){
        collapseContent.style.maxHeight = collapseContent.scrollHeight+"px";
        collapseContent.style.padding = "15px"
        collapseContent.style.paddingTop = "27px"
    }
    else{
        collapseContent.style.padding = 0
        collapseContent.style.paddingTop = 0 
        collapseContent.style.maxHeight = 0 ;
    }
  }

class Collapse extends React.Component {
    render() {
        return (
            <div className="collapsible">
                <button className="collapse-button" onClick={handleClickCollapse}>{this.props.title}</button>
                <div className="collapse-content">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Collapse;
