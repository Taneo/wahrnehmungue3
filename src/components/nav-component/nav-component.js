import React from 'react';
import './nav-component.scss'

export default class NavComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Shinra'
        }

    }

    render() {
        return (
            <nav>
                <p>{this.state.name}</p>
                <ul>
                    <li className="App__navitem one"><a>Home</a></li>
                    <li className="App__navitem two"><a>About</a></li>
                    <li className="App__navitem three"><a>Project</a></li>
                    <hr/>
                </ul>
            </nav>
        )
    }
}