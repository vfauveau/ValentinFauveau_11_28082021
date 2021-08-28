import React from 'react';
import "../styles/Banner.css"
import banner from "../pictures/banner.jpg"

// changer src de banner pour un props
// attendre de créer un routeur 
class Banner extends React.Component{
    render(){
        return <div className="bannerWrapper"><img className="bannerImg" alt="banner" src={banner}/><h1 className="bannerTitle">Chez vous, et partout ailleurs</h1></div>
    }
}

export default Banner