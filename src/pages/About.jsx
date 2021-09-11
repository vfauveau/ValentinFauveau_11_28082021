import React from "react";
import Banner from "../components/Banner.jsx";
import Collapse from "../components/Collapse.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import bannerAbout from "../pictures/bannerAbout.jpg";
// About page
class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header styleName={""} styleName2="navLink-active" />
                <article>
                    <Banner styleName="bigBanner" src={bannerAbout} />
                    <Collapse
                        title="Fiabilité"
                        content={
                            <p>
                                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                                régulièrement vérifiées par nos équipes.
                            </p>
                        }
                    ></Collapse>
                    <Collapse
                        title="Respect"
                        content={
                            <p>
                                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une
                                exclusion de notre plateforme.
                            </p>
                        }
                    ></Collapse>
                    <Collapse
                        title="Service"
                        content={
                            <p>
                                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre
                                question.
                            </p>
                        }
                    ></Collapse>
                    <Collapse
                        title="Responsabilité"
                        content={
                            <p>
                                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis
                                par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien
                                respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                            </p>
                        }
                    ></Collapse>
                    <Footer />
                </article>
            </React.Fragment>
        );
    }
}

export default About;
