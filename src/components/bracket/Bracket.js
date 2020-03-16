import React from 'react';


const Bracket = (props) => {

    const { bracket } = props

    return (
        <div className="bracket expand" style={{ backgroundImage: `url(${bracket})` }}></div>
    )
}

export default Bracket;