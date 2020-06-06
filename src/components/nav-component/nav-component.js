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
                    <li className="App__navitem"><a>Home</a></li>
                    <li className="App__navitem"><a>About</a></li>
                    <li className="App__navitem"><a>Project</a></li>
                </ul>
                <button className="App__button">Contact</button>
            </nav>
        )
    }
}