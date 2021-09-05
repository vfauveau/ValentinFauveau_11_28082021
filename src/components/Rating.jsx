import React, { Component } from "react";
import redStar from "../pictures/red-star.png";
import whiteStar from "../pictures/white-star.png";

export default class Rating extends Component {
    render() {
        var ratingArray = [];
        function printRatingStars(e) {
            for (let x = 0; e > x; x++) {
                ratingArray.push(<img style={{width: "30px",height: "30px", marginRight: "10px"}} src={redStar} key={ratingArray.length} className="ratings" alt="" />);
            }
            if (ratingArray.length <= 4) {
                let difference = 4 - ratingArray.length;
                for (let y = 0; difference >= y; y++) {
                    ratingArray.push(<img style={{width: "30px",height: "30px", marginRight: "10px"}} src={whiteStar} key={ratingArray.length} className="ratings" alt="" />);
                }
            }
            return(ratingArray)
        }
        
        return <div>{printRatingStars(this.props.rate)}</div>;
    }
}
