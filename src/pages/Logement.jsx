import React, { Component } from "react";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx";
import Carousel from "../components/Carousel.jsx";
import Content from "../components/Content";
import Error from "../components/Error";
import logements from "../logements.json";

// Logement
export default class Fiche extends Component {
    render() {
        var id = this.props.match.params.id;
        var index;
        // get the id from the url (as prop)
        // look if contained in data, if yes => get the index and pass it down as props
        // if not contained => return 404 error page
        for (let x in logements) {
            if (logements[x].id === id) {
                index = x;
            }
        }
        if (index !== undefined) {
            return (
                <React.Fragment>
                    <Header />
                    <Carousel index={index} />
                    <Content index={index} />
                    <Footer></Footer>
                </React.Fragment>
            );
        } else {
            return <Error />;
        }
    }
}
