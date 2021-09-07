import React from "react";
import "../styles/Carousel.css";
import arrow from "../pictures/CarouselArrow.png";
import logements from "../logements.json";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            maxCount: logements[this.props.index].pictures.length,
            picturesSrc: logements[this.props.index].pictures,
        };
    }
    incrementCounter = () => {
        this.state.count < this.state.maxCount
            ? this.setState({ count: this.state.count + 1 })
            : this.setState({ count: 1 });
    };
    decrementCounter = () => {
        this.state.count <= 1
            ? this.setState({ count: this.state.maxCount })
            : this.setState({ count: this.state.count - 1 });
    };

    render() {
        if (this.state.maxCount === 1) {
            return <React.Fragment>
                <div className="carousel-container">
                    <img
                        className="carousel-picture"
                        src={this.state.picturesSrc[this.state.count - 1]}
                        alt={this.props.name}
                    ></img>
                    <p className="carousel-counter">
                        {this.state.count}/{this.state.maxCount}
                    </p>
                </div>
            </React.Fragment>;
        } else {
            return (
                <React.Fragment>
                    <div className="carousel-container">
                        <img className="left-arrow" alt="previousPicture" src={arrow} onClick={this.decrementCounter}></img>
                        <img
                            className="carousel-picture"
                            src={this.state.picturesSrc[this.state.count - 1]}
                            alt={this.props.name}
                        ></img>
                        <img className="right-arrow" alt="nextPicture" src={arrow} onClick={this.incrementCounter}></img>
                        <p className="carousel-counter">
                            {this.state.count}/{this.state.maxCount}
                        </p>
                    </div>
                </React.Fragment>
            );
        }
    }
}
export default Carousel;
