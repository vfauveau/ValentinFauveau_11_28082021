import React, { Component } from "react";
import Banner from "../../components/Banner.jsx"
import Gallery from "../../components/Gallery.jsx"
import banner from "../../pictures/banner.jpg"
import Footer from  "../../components/Footer.jsx"
export default class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner src={banner} text="Chez vous, et partout ailleurs" />
                <Gallery />
                <Footer />
            </React.Fragment>
        );
    }
}
