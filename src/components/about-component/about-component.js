import React from 'react';
import './about-component.scss'
import { ReactComponent as Logo } from '../../assets/images/Books_SVG.svg'

export default class AboutComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Shinra'
        }

    }

    render() {
        return (
            <div className="container">
                <div className="container__item">
                    <p>
                        Aliqua occaecat nisi ullamco nisi ex enim pariatur aute aute. Cillum consectetur fugiat nisi aliqua reprehenderit exercitation non exercitation consequat eu dolore occaecat elit. Proident non reprehenderit nulla cillum dolor in.
                    </p>
                </div>
                <div className="container__item">
                    <Logo className="logo"></Logo>
                </div>
                
            </div>
        )
    }
}