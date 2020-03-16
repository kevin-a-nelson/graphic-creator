import React, { useState } from 'react'
import './background.scss'

const Background = (props) => {

    const { backgroundImage } = props

    return (
        <div className="expand">
            <div className="background expand" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        </div>
    )
}

export default Background

