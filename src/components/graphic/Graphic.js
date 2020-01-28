import React from 'react'
import Draggable from 'react-draggable'

import './graphic.scss'

export default class Graphic extends React.Component {
    render() {

        const { backgroundImage, bracket, logo } = this.props;

        return (
            <div className="graphic-container">
                <div className="graphic">
                    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                    <div className="bracket" style={{ backgroundImage: `url(${bracket})` }}></div>
                    <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
                </div>
            </div >
        )
    }
}