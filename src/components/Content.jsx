import React, { Component } from 'react'
import logements from "../logements.json"

export default class Content extends Component {
    render() {
        let logement = logements[this.props.index]
        return (
            <div>
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
                <div className="fiche-tags-container"></div>
            </div>
        )
    }
}
