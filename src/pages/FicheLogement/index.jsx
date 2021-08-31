import React, { Component } from "react";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import Content from "../../components/Content"
import logements from "../../logements.json"



export default class Fiche extends Component {

    render() {
    var id = this.props.match.params.id
    var index 
        for(let x in logements){
            if(logements[x].id === id){
                index = x 
            }
        }
        return (
            <React.Fragment>
                <Carousel index={index}/>
                <Content index={index}/>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}
