import React from "react"
import "../../styles/Carousel.css"
import arrow from "../../pictures/CarouselArrow.png"

class Carousel extends React.Component{
    render(){
        return <div className="carousel-container">
            <img className="left-arrow" alt="CarouselLeftArrow"src={arrow}></img>
            <img className="carousel-picture"src={this.props.picture} alt={this.props.name}></img>
            <img className="right-arrow" alt="CarouselRightArrow" src={arrow}></img>
            <p className="carousel-counter"></p>
        </div>
    }
}
export default Carousel