import React, { Component } from "react";
import Footer from "../../components/Footer.jsx";
import Carousel from "../../components/Carousel.jsx";
import Content from "../../components/Content";
import Error from "../../components/Error"
import logements from "../../logements.json";

export default class Fiche extends Component {
    render() {
        var id = this.props.match.params.id;
        var index;
        // récupère l'id passé dans l'url (prop)
        // on cherche si il est contenu dans la base de donné si oui on récupère l'index pour le passer en prop aux composants.
        // sinon cela l'id n'existe pas dans la base de donnée et on renvoi l'erreur 404.
        for (let x in logements) {
            if (logements[x].id === id) {
                index = x;
            }
        }
        if (index !== undefined) {
            return (
                <React.Fragment>
                    <Carousel index={index} />
                    <Content index={index} />
                    <Footer></Footer>
                </React.Fragment>
            );
        }
        else{
            return <Error/>
        }
    }
}
