import React from 'react';
import "./bracket.scss"


const Bracket = (props) => {

    const { bracketType } = props

    return (
        <div className="bracket expand" style={{ backgroundImage: `url(${bracketType})` }}></div>
    )
}

export default Bracket;