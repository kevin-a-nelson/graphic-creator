import React from 'react'
import Background from '../../assets/Backgrounds/DerbyCityDuel.png';
import Draggable from 'react-draggable';

import './graphic.scss'

export default class Graphic extends React.Component {
    render() {

        const { backgroundImage, bracket } = this.props;

        return (
            <div className="graphic-container">
                <div className="graphic" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="bracket">
                        <div className="bracket-img-container">
                            <img src={bracket} alt="bracket" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}