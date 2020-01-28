import React from 'react';
import Select from 'react-dropdown-select';
import Selectors from '../selectors/Selectors'


class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Selectors
                    dropDowns={this.props.dropDowns}
                >
                </Selectors>
            </div>
        )
    }
}

export default SideBar;