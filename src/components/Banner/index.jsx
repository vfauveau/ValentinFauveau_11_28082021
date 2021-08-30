import React from 'react';
import "../../styles/Banner.css"

class Banner extends React.Component{
    render(){
        return <div className="bannerWrapper"><img className="bannerImg" alt="banner" src={this.props.src}/><h1 className="bannerTitle">{this.props.text}</h1></div>
    }
}

export default Banner