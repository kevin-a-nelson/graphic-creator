import React from 'react'
import Draggable from 'react-draggable'
import './logo.scss'


const Logo = (props) => {

    const { width, logo, logoDim } = props

    const logoStyle = {
        width: `${width / logoDim.width}px`,
        right: `${width / logoDim.right}px`,
        bottom: `${width / logoDim.bottom}px`
    }

    return (
        <div className="logo" style={logoStyle}>
            <div className="img-container">
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Logo