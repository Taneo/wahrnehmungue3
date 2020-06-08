import React from 'react';
import './bottom-section-component.scss'

export default class BottomSectionComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Shinra'
        }

    }

    render() {
        return (
            <React.Fragment>
                <div className="footer">
                    <p>
                        Von Tobias Belkner & Denny Schumann <br/>
                        @Beuth-Hochschule für Technik Berlin<br/>
                        Multimediale Informationsbearbeitung
                    </p>
                </div>
            </React.Fragment>
        )
    }
}