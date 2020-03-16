import React from 'react'

import "./title.scss"

const Title = (props) => {

    const { width, title } = props

    const titleStyle = {
        marginTop: `${width / 50}px`
    }

    return (
        <div className="title"
            style={titleStyle}
        >
            {title}
        </div >
    )
}

export default Title