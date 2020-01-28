import React from 'react';
import Select from 'react-dropdown-select';

import './selectors.scss'

class Selectors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="selectors">
                {
                    this.props.dropDowns.map((dropDown, idx) => {
                        return (
                            <div key={idx} >
                                <p>{dropDown.title}</p>
                                <Select
                                    className="select"
                                    options={dropDown.dropDown}
                                ></Select>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Selectors;