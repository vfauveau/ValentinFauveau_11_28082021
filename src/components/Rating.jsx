import React, { Component } from "react";
import "../styles/Rating.css";
import redStar from "../pictures/star-red.png";

export default class Rating extends Component {

    render() {
        const rating = this.props.rate;
        let ratingsStar = document.getElementsByClassName("ratings")
        console.log(rating, ratingsStar)
        return <div>
            <img className="ratings" src={redStar} alt="" />
            <img className="ratings" src={redStar} alt="" />
            <img className="ratings" src={redStar} alt="" />
            <img className="ratings" src={redStar} alt="" />
            <img className="ratings" src={redStar} alt="" />
        </div>;
    }
}
