import React from 'react';
// import Select from 'react-dropdown-select';
import Select from 'react-select';
import backgroundImageOptions from '../../options/backgroundOptions'
import logoOptions from '../../options/logoOptions'
import eventOptions from '../../options/eventOptions'
import 'react-input-range/lib/css/index.css'
import myAxios from '../../AxiosInstance'
// import htmlToImage from 'html-to-image';
import './sidebar.scss'
import teams from '../../static/teamPositions'
import domtoimage from 'dom-to-image';
// import puppeteer from 'puppeteer';
import { useHistory } from "react-router-dom";

function lzw_encode(s) {
    var dict = {};
    var data = (s + "").split("");
    var out = [];
    var currChar;
    var phrase = data[0];
    var code = 256;
    for (var i = 1; i < data.length; i++) {
        currChar = data[i];
        if (dict[phrase + currChar] != null) {
            phrase += currChar;
        }
        else {
            out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
            dict[phrase + currChar] = code;
            code++;
            phrase = currChar;
        }
    }
    out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
    for (var i = 0; i < out.length; i++) {
        out[i] = String.fromCharCode(out[i]);
    }
    return out.join("");
}
function lzw_decode(s) {
    var dict = {};
    var data = (s + "").split("");
    var currChar = data[0];
    var oldPhrase = currChar;
    var out = [currChar];
    var code = 256;
    var phrase;
    for (var i = 1; i < data.length; i++) {
        var currCode = data[i].charCodeAt(0);
        if (currCode < 256) {
            phrase = data[i];
        }
        else {
            phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
        }
        out.push(phrase);
        currChar = phrase.charAt(0);
        dict[code] = oldPhrase + currChar;
        code++;
        oldPhrase = phrase;
    }
    return out.join("");
}
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

    onBackgroundChange(selectedOption) {
        let newBackground = selectedOption;
        this.props.setBackgroundImage(newBackground.value);
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
        const event = await myAxios.get(url)
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

        let teamNamesIdx = 0
        let newTeamsIdx = 0

        const newTeams = pool === "All" ? teams["TenPools"] : teams["SinglePool"]

        newTeams.text[newTeamsIdx].name = eventName

        newTeamsIdx += 1

        if (pool === "All") {
            let teamNames = Object.values(event.Divisions[division].Pools)
            teamNames = teamNames.map(teams => teams.map(team => team.Name))
            teamNames = teamNames.flat(1)
            while (newTeamsIdx < newTeams.text.length) {
                if (newTeams.text[newTeamsIdx].isConstant) {
                    newTeamsIdx += 1
                    continue
                }
                newTeams.text[newTeamsIdx].name = teamNames[teamNamesIdx]
                newTeamsIdx += 1
                teamNamesIdx += 1
            }
        } else {
            const poolLetter = String.fromCharCode(pool + 64);
            newTeams.text[newTeamsIdx].name = `Pool ${pool}`;
            newTeamsIdx += 1
            let teamNames = event.Divisions[this.state.selectedDivision.value].Pools[poolLetter].map(team => [
                `${team.Wins} - ${team.Loses}`,
                team.Name]);

            teamNames = teamNames.flat(1)
            while (newTeamsIdx < newTeams.text.length) {
                if (newTeams.text[newTeamsIdx].isConstant) {
                    newTeamsIdx += 1
                    continue
                }
                newTeams.text[newTeamsIdx].name = teamNames[teamNamesIdx]
                newTeamsIdx += 1
                teamNamesIdx += 1
            }
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

    async onDivisionChange(selectedOption) {
        await this.setState({ selectedPool: { label: 'All', value: 'All' } })
        await this.setState({ selectedDivision: selectedOption })
        this.setNewTeams()
    }

    async onDownload(title, bracketNumber) {
        const teamNames = JSON.stringify(this.props.teams.text.map(text => text.name ? text.name.replace('#', '_HASHTAG') : ""))
        let compressedTeamNames = lzw_encode(teamNames)
        return
    }

    render() {

        const { divisions, pools } = this.state

        let divisionOptions = []
        if (divisions !== []) {
            divisionOptions = divisions.map(division => ({ label: division, value: division }))
        }

        let poolOptions = []
        if (pools !== []) {
            poolOptions = pools.map(pool => ({ label: pool.charCodeAt(0) - 64, value: pool.charCodeAt(0) - 64 }))
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
                    <button className="btn-download" onClick={() => this.onDownload(this.props.title, this.props.bracketNumber)}>
                        Download
                    </button>
                </div>
            </div>
        )
    }
}

export default SideBar