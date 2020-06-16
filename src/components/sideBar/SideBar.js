import React from 'react';
import Select from 'react-dropdown-select';
import backgroundImageOptions from '../../options/backgroundOptions'
import logoOptions from '../../options/logoOptions'
import eventOptions from '../../options/eventOptions'
import bracketOptions from '../../options/bracketOptions'
import bracketNumberOptions from '../../options/bracketNumber'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import axiosInstance from '../../AxiosInstance'
import htmlToImage from 'html-to-image';
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
    }

    async getNewTeams() {
        const newTeams = this.props.teams
        await axiosInstance.get(`exposure/events/${this.props.eventId}/games/playoffs?bracket=${this.props.bracketNumber}`)
            .then(response => {
                let idx = 0
                response.data.forEach((game) => {
                    newTeams[idx].name = game.AwayTeam.Name
                    newTeams[idx + 1].name = game.HomeTeam.Name
                    idx += 2
                })
            })
            .catch(error => console.log(error))

        this.props.setTeams(newTeams)
    }

    async onEventChange(option) {

        const newEventId = option[0].value;
        const newEventTitle = option[0].label;
        await this.props.setTitle(newEventTitle)
        await this.props.setEventId(newEventId)
        this.getNewTeams()
    }

    async onBracketNumberChange(option) {
        const newBracketNumber = option[0].value;
        await this.props.setBracketNumber(newBracketNumber)
        this.getNewTeams()
    }

    bracketName() {
        return [
            'Championship Bracket',
            'Silver Bracket',
            'Bronze Bracket'
        ][this.props.bracketNumber - 1]
    }

    onDownload(title, bracketNumber) {

        let bracketName = [
            'Championship Bracket',
            'Silver Bracket',
            'Bronze Bracket'
        ][bracketNumber]

        htmlToImage.toJpeg(document.getElementById('graphic'), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = `${title} - ${bracketName}.jpeg`;
                link.href = dataUrl;
                link.click();
            });
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
                    {/* <p>Bracket Type</p>
                    <Select
                        className="select"
                        options={bracketOptions}
                        onChange={this.onBracketChange.bind(this)}
                    /> */}
                    <p>Events</p>
                    <Select
                        className="select"
                        options={eventOptions}
                        onChange={this.onEventChange.bind(this)}
                    />
                    {/* <p>Bracket Number</p>
                    <Select
                        className="select"
                        options={bracketNumberOptions}
                        onChange={this.onBracketNumberChange.bind(this)}
                    /> */}
                    {/* <p>Size</p>
                    <InputRange
                        maxValue={1000}
                        minValue={1}
                        value={this.state.size}
                        onChange={this.onSizeChange.bind(this)}
                    /> */}
                    <button className="btn-download" onClick={() => this.onDownload(this.props.title, this.props.bracketNumber)}>Download</button>
                </div>
            </div>
        )
    }
}

export default SideBar