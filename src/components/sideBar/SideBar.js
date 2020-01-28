import React from 'react';
import Select from 'react-dropdown-select';

import backgroundImageOptions from '../../options/backgroundOptions'
import bracketOptions from '../../options/bracketOptions'
import logoOptions from '../../options/logoOptions'

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

    onLogoChange(option) {
        let newLogo = option[0].value;
        this.props.setLogoImage(newLogo);
        console.log(newLogo);
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
                    <p>Logo</p>
                    <Select
                        className="select"
                        options={logoOptions}
                        onChange={this.onLogoChange.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default SideBar;