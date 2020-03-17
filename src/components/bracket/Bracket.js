import React from 'react';
import "./bracket.scss"


const Bracket = (props) => {

    const { bracket } = props

    return (
        <div className="bracket expand" style={{ backgroundImage: `url(${bracket})` }}></div>
    )
}

export default Bracket;