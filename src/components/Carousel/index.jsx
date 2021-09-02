import React from "react";
import "../../styles/Carousel.css";
import arrow from "../../pictures/CarouselArrow.png";
import logements from "../../logements.json";
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            maxCount: logements[this.props.index].pictures.length,
            picturesSrc: logements[this.props.index].pictures[0],
        };
    }

    increment = () => {
        this.state.count < this.state.maxCount
            ? this.setState({ count: this.state.count + 1 })
            : this.setState({ count: 0 });
    };
    decrement = () => {
        this.setState({
            count: this.state.count - 1,
        });
    };
    render() {
        return (
            <React.Fragment>
                <div className="carousel-container">
                    <img className="left-arrow" alt="CarouselLeftArrow" src={arrow} onClick={this.decrement}></img>
                    <img className="carousel-picture" src={this.state.picturesSrc} alt={this.props.name}></img>
                    <img className="right-arrow" alt="CarouselRightArrow" src={arrow} onClick={this.increment}></img>
                </div>
                <p className="carousel-counter">{this.state.count}/{this.state.maxCount+1}</p>
            </React.Fragment>
        );
    }
}
export default Carousel;
