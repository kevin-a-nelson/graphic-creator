import React from 'react'

import './graphic.scss'

export default class Graphic extends React.Component {
    render() {

        const { backgroundImage, bracket, logo } = this.props;

        return (
            <div className="graphic-container">
                <div className="graphic" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="bracket">
                        <div className="bracket-img-container">
                            <img src={bracket} alt="bracket" />
                        </div>
                    </div>

                    <div className="logo">
                        <div className="logo-img-container">
                            <img src={logo} alt="bracket" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}