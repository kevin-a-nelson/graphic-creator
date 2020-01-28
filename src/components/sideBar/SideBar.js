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

    onBracketChange(option) {
        let newBracket = option[0].value;
        this.props.setBracketImage(newBracket);
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
                    />
                    <p>Bracket</p>
                    <Select
                        className="select"
                        options={bracketOptions}
                        onChange={this.onBracketChange.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default SideBar;