import React from 'react';
import Select from 'react-dropdown-select';

class Selectors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {
                    this.props.dropDowns.map((dropDown, idx) => {
                        return (
                            <div
                                key={idx}
                            >
                                <p>{dropDown.title}</p>
                                <Select
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