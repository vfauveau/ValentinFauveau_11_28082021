import React from "react";
import "../styles/Banner.css";

// adaptating the style of the banner in regards of the page displayed (Homepage/About)
class Banner extends React.Component {
    render() {
        return (
            <div className={`bannerWrapper ${ this.props.styleName }`}>
                <img className={`bannerImg ${ this.props.styleName }`} alt="banner" src={this.props.src} />
                <h1 className="bannerTitle">{this.props.text}</h1>
            </div>
        );
    }
}

export default Banner;
