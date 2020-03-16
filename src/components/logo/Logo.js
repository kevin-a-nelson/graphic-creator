import React from 'react'
import Draggable from 'react-draggable'
import './logo.scss'


const Logo = (props) => {

    const { width, logo } = props

    const logoStyle = {
        width: `${width / 6}px`,
        right: `${width / 25}px`,
        bottom: `${width / 7}px`
    }

    return (
        <Draggable>
            <div className="logo" style={logoStyle}>
                <div className="img-container">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </Draggable>
    )
}

export default Logo