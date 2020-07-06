import React from 'react';
// import Select from 'react-dropdown-select';
import Select from 'react-select';
import backgroundImageOptions from '../../options/backgroundOptions'
import logoOptions from '../../options/logoOptions'
import eventOptions from '../../options/eventOptions'
import 'react-input-range/lib/css/index.css'
import axiosInstance from '../../AxiosInstance'
import htmlToImage from 'html-to-image';
import './sidebar.scss'
import teams from '../../static/teamPositions'

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 1000,
            selectedEvent: [],
            selectedDivision: [],
            selectedPool: [],
            divisions: [],
            pools: [],
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

    onLogoChange(selectedOption) {
        this.props.setLogoImage(selectedOption.value);
    }

    onSizeChange(value) {
        this.setState({ size: value })
        this.props.setWidth(960 * (value / 1000));
        this.props.setHeight(540 * (value / 1000));
    }

    async fetchEvent() {
        const url = `exposure/events/${this.props.eventId}`
        const event = await axiosInstance.get(url)
            .then(response => {
                return response.data
            })
        await this.props.setEvent(event)
        this.setNewTeams()
    }

    async setNewTeams() {
        const event = this.props.event
        const divisions = Object.keys(event.Divisions)
        const division = this.state.selectedDivision.value || divisions[divisions.length - 1]
        const pools = Object.keys(event.Divisions[division].Pools)
        const pool = this.state.selectedPool.value || "All"
        const eventName = event.Name
        let teamNames = Object.values(event.Divisions[division])
        teamNames = teamNames[0]
        teamNames = Object.values(teamNames)
        teamNames = teamNames.flat(1)

        let teamNamesIdx = 0
        let newTeamsIdx = 0

        const newTeams = pool === "All" ? teams["TenPools"] : teams["SinglePool"]

        newTeams.text[newTeamsIdx].name = eventName

        newTeamsIdx += 1

        while (newTeamsIdx < newTeams.text.length) {
            if (newTeams.text[newTeamsIdx].isConstant) {
                newTeamsIdx += 1
                continue
            }
            newTeams.text[newTeamsIdx].name = teamNames[teamNamesIdx]
            newTeamsIdx += 1
            teamNamesIdx += 1
        }
        this.props.setTeams(newTeams)

        this.setState({ divisions })
        this.setState({ pools })
        this.setState({ selectedDivision: { label: division, value: division } })
        this.setState({ selectedPool: { label: pool, value: pool } })
    }

    async onEventChange(selectedOption) {
        this.setState({ selectedEvent: selectedOption })
        const newEventId = selectedOption.value;
        await this.props.setEventId(newEventId)
        this.fetchEvent()
    }

    async onBracketNumberChange(option) {
        const newBracketNumber = option[0].value;
        await this.props.setBracketNumber(newBracketNumber)
        this.setNewTeams()
    }

    async onPoolChange(selectedOption) {
        await this.setState({ selectedPool: selectedOption })
        this.setNewTeams()
    }

    bracketName() {
        return [
            'Championship Bracket',
            'Silver Bracket',
            'Bronze Bracket'
        ][this.props.bracketNumber - 1]
    }

    async onDivisionChange(selectedOption) {
        await this.setState({ selectedDivision: selectedOption })
        this.setNewTeams()
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

        const { divisions, pools } = this.state

        let divisionOptions = []
        if (divisions !== []) {
            divisionOptions = divisions.map(division => ({ label: division, value: division }))
        }

        let poolOptions = []
        if (pools !== []) {
            poolOptions = pools.map(pool => ({ label: pool, value: pool }))
            poolOptions.unshift({
                label: "All", value: "All"
            })
        }

        return (
            <div className="sidebar-container">
                <div className="sidebar">
                    <p>Events</p>
                    <Select
                        className="select"
                        options={eventOptions}
                        onChange={this.onEventChange.bind(this)}
                        value={this.state.selectedEvent}
                    />
                    <p>Division</p>
                    <Select
                        value={this.state.selectedDivision}
                        className="select"
                        options={divisionOptions}
                        onChange={this.onDivisionChange.bind(this)}
                        disabled={!this.props.division}
                    />
                    <p>Pools</p>
                    <Select
                        value={this.state.selectedPool}
                        className="select"
                        options={poolOptions}
                        onChange={this.onPoolChange.bind(this)}
                        disabled={!this.props.pool}
                    />
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
                    {/* 
                    <p>Bracket Type</p>
                    <Select
                        className="select"
                        options={bracketOptions}
                        onChange={this.onBracketChange.bind(this)}
                    />
                     */}


                    {/* <p>Bracket Name</p>
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