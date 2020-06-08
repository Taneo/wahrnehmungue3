import React from 'react';
import './bottom-section-component.scss'

export default class BottomSectionComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authors: 'Tobias Belkner & Denny Schumann'
        }

    }

    render() {
        return (
            <React.Fragment>
                <div className="footer">
                    <p>
                        Von {this.state.authors} <br />
                        @Beuth-Hochschule für Technik Berlin<br />
                        Multimediale Informationsbearbeitung
                    </p>
                </div>
            </React.Fragment>
        )
    }
}