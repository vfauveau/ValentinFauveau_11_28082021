import React from 'react';
import Thumbnail from './Thumbnail';
import Logements from "../logements.json"
import "../styles/Gallery.css"

class Gallery extends React.Component {
    render() {
        return <section className="gallery">
            {Logements.map((logement, index) => (
                <Thumbnail id={logement.id} cover={logement.cover} title={logement.title} key={`${logement}-${index}`}>{ logement }</Thumbnail>
            ))}
        </section>
    }
}


export default Gallery