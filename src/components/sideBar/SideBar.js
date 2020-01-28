import React from 'react';
import Select from 'react-dropdown-select';
import Selectors from '../selectors/Selectors'

import './sidebar.scss'


class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="sidebar-container">
                <div className="sidebar">
                    <Selectors
                        dropDowns={this.props.dropDowns}
                        setBackgroundImage={this.props.setBackgroundImage}
                    >
                    </Selectors>
                </div>
            </div>
        )
    }
}

export default SideBar;