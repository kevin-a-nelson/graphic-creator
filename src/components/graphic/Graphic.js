import React from 'react'
import Background from '../../assets/Backgrounds/DerbyCityDuel.png';

import './graphic.scss'

export default class Graphic extends React.Component {
    render() {

        const { backgroundImage } = this.props;

        return (
            <div className="graphic-container">
                <div className="graphic"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                </div>
            </div>
        )
    }
}