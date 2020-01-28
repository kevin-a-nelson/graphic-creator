import React from 'react'
import Background from '../../assets/Backgrounds/DerbyCityDuel.png';
import Draggable from 'react-draggable';

import './graphic.scss'

export default class Graphic extends React.Component {
    render() {

        const { backgroundImage } = this.props;

        return (
            <div className="graphic-container">
                <Draggable>
                    <div className="graphic" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                </Draggable>
                <Draggable>
                    <div className="bracket"></div>
                </Draggable>
            </div>
        )
    }
}