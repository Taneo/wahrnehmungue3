import React from 'react';
import './middle-section-component.scss'
import banner from '../../assets/images/workspace.jpeg'
import { ReactComponent as Logo } from '../../assets/images/Books_SVG.svg'

export default class MiddleSectionComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Shinra'
        }

    }

    render() {
        return (
            <React.Fragment>
                <div className="image-container">
                    <img classname="image" src={banner}></img>
                </div>
                <div className="content-container">
                    <div className="left-side">
                        <p>
                            <h1 className="head">Lernen Sie über unser Produkt!</h1>
                            Cillum duis et amet eu officia ullamco eu ea qui fugiat.
                            In proident quis nostrud elit magna cupidatat incididunt.
                            Nisi fugiat amet irure pariatur consectetur exercitation Lorem et dolore.
                            <br/>
                            <br/>
                            <button className="more-button">Mehr Erfahren</button>
                        </p>
                    </div>
                    <div className="right-side">
                        <Logo />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}