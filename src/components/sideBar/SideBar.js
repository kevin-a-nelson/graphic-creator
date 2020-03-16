import React from 'react';
import Select from 'react-dropdown-select';
import backgroundImageOptions from '../../options/backgroundOptions'
import logoOptions from '../../options/logoOptions'
import eventOptions from '../../options/eventOptions'
import bracketOptions from '../../options/bracketOptions'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import axiosInstance from '../../AxiosInstance'

import './sidebar.scss'

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 1000,
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

    onSizeChange(value) {
        this.setState({ size: value })
        this.props.setWidth(960 * (value / 1000));
        this.props.setHeight(540 * (value / 1000));
        console.log()
    }

    async onEventChange(option) {

        const newTeams = this.props.teams
        const eventId = option[0].value;
        const eventName = option[0].label;

        await axiosInstance.get(`exposure/events/${eventId}/games/playoffs`)
            .then(response => {
                response.data.forEach((game, idx) => {
                    newTeams[idx].name = game.HomeTeam.Name
                    newTeams[idx + 1].name = game.AwayTeam.Name
                })
            })
            .catch(error => console.log(error))

        this.props.setTitle(eventName)
        this.props.setTeams(newTeams)
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
                    <p>Logo</p>
                    <Select
                        className="select"
                        options={logoOptions}
                        onChange={this.onLogoChange.bind(this)}
                    />
                    <p>Bracket Type</p>
                    <Select
                        className="select"
                        options={bracketOptions}
                        onChange={this.onBracketChange.bind(this)}
                    />
                    <p>Events</p>
                    <Select
                        className="select"
                        options={eventOptions}
                        onChange={this.onEventChange.bind(this)}
                    />
                    <p>Size</p>
                    <InputRange
                        maxValue={1000}
                        minValue={1}
                        value={this.state.size}
                        onChange={this.onSizeChange.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default SideBar;