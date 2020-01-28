import React from 'react';
import Select from 'react-dropdown-select';

import backgroundImageOptions from '../../dropDowns/backgroundImageOptions'
import bracketOptions from '../../dropDowns/bracketOptions'


import './sidebar.scss'


class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onBackgroundChange(option) {
        let newBackground = option[0].value;
        this.props.setBackgroundImage(newBackground);
    }

    render() {
        return (
            <div className="sidebar-container">
                <div className="sidebar">
                    <p>Background Image</p>
                    <Select
                        className="select"
                        options={backgroundImageOptions}
                        onChange={this.onBackgroundChange.bind(this)}
                    >
                    </Select>
                    <p>Bracket</p>
                    <Select
                        className="select"
                        options={bracketOptions}
                    ></Select>
                </div>
            </div>
        )
    }
}

export default SideBar;