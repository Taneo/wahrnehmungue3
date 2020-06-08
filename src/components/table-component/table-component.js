import React from 'react';
import './table-component.scss'

export default class AboutComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Shinra'
        }

    }

    render() {
        const staticMembers = {
            'Sebi': {
                'Head': 'Eden',
                'Body': 'Eden',
                'Hands': 'Crystarium',
                'Waist': 'Eden',
                'Legs': 'Eden',
                'Boots': 'Crystarium',
                'Earrings': 'Eden',
                'Neck': 'Eden',
                'Wrist': 'Eden',
                'Ring1': 'Eden',
                'Ring2': 'Crystarium'
            },
            'Tiita': {
                'Head': 'Eden',
                'Body': 'Eden',
                'Hands': 'Crystarium',
                'Waist': 'Crystarium',
                'Legs': 'Crystarium',
                'Boots': 'Eden',
                'Earrings': 'Eden',
                'Neck': 'Eden',
                'Wrist': 'Eden',
                'Ring1': 'Crystarium',
                'Ring2': 'Eden'
            },
            'Ko': {
                'Head': 'Crystarium',
                'Body': 'Eden',
                'Hands': 'Eden',
                'Waist': 'Eden',
                'Legs': 'Eden',
                'Boots': 'Crystarium',
                'Earrings': 'Eden',
                'Neck': 'Eden',
                'Wrist': 'Eden',
                'Ring1': 'Eden',
                'Ring2': 'Crystarium'
            },
            'Chi': {
                'Head': 'Eden',
                'Body': 'Eden',
                'Hands': 'Eden',
                'Waist': 'Eden',
                'Legs': 'Eden',
                'Boots': 'Eden',
                'Earrings': 'Eden',
                'Neck': 'Eden',
                'Wrist': 'Eden',
                'Ring1': 'Crystarium',
                'Ring2': 'Eden'
            },
            'Nitious': {
                'Head': 'Eden',
                'Body': 'Eden',
                'Hands': 'Eden',
                'Waist': 'Eden',
                'Legs': 'Eden',
                'Boots': 'Eden',
                'Earrings': 'Eden',
                'Neck': 'Eden',
                'Wrist': 'Eden',
                'Ring1': 'Eden',
                'Ring2': 'Crystarium'
            },
            'Shiro': {
                'Head': 'Crystarium',
                'Body': 'Eden',
                'Hands': 'Eden',
                'Waist': 'Eden',
                'Legs': 'Crystarium',
                'Boots': 'Eden',
                'Earrings': 'Eden',
                'Neck': 'Eden',
                'Wrist': 'Eden',
                'Ring1': 'Crystarium',
                'Ring2': 'Eden'
            },
            'RandomBob1': {
                'Head': 'Eden',
                'Body': 'Eden',
                'Hands': 'Eden',
                'Waist': 'Eden',
                'Legs': 'Eden',
                'Boots': 'Eden',
                'Earrings': 'Eden',
                'Neck': 'Eden',
                'Wrist': 'Eden',
                'Ring1': 'Eden',
                'Ring2': 'Crystarium'
            },
            'RandomBob2': {
                'Head': 'Eden',
                'Body': 'Eden',
                'Hands': 'Crystarium',
                'Waist': 'Eden',
                'Legs': 'Eden',
                'Boots': 'Crystarium',
                'Earrings': 'Eden',
                'Neck': 'Eden',
                'Wrist': 'Eden',
                'Ring1': 'Crystarium',
                'Ring2': 'Eden'
            },
        }

        const gearslots = ['Head', 'Body', 'Hands', 'Waist', 'Legs', 'Boots', 'Earrings', 'Neck', 'Wrist', 'Ring1', 'Ring2']
        const staticMemberKeys = Object.keys(staticMembers)

        const tableheadersTop = []
        const tableheadersLeft = []
        const tableData = []

        for (const [index, value] of staticMemberKeys.entries()) {
            tableheadersTop.push(
                <td><th className="topHeader">{value}</th></td>
            )
        }

        for (const [index, gear] of gearslots.entries()) {
            tableheadersLeft.push(
                <tr>
                    <th className="leftHeader">{gear}</th>
                    {staticMemberKeys.map((member, index) => {
                        return <React.Fragment>
                            <td className="entry" key={index}>{staticMembers[member][gear]}</td>
                        </React.Fragment>
                    })}
                </tr>
            )
        }

        return (
            <div className="container">
                <table>
                    <th></th>
                    {tableheadersTop}
                    {tableheadersLeft}
                </table>
            </div>
        )
    }
}