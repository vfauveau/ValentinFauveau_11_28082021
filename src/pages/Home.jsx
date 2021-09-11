import React, { Component } from "react";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Gallery from "../components/Gallery.jsx";
import banner from "../pictures/banner.jpg";
import Footer from "../components/Footer.jsx";

// Homepage
export default class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header styleName="navLink-active" styleName2={""}/>
                <Banner src={banner} styleName={""} text="Chez vous, et partout ailleurs" />
                <Gallery />
                <Footer />
            </React.Fragment>
        );
    }
}
