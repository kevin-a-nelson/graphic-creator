import React, { setState } from 'react';
import './App.css';
import Background from "./assets/Backgrounds/SpaceCityCollision.png"
import Bracket from "./assets/Brackets/TenPools.png"
import Logo from './assets/2020CircuitLogos/A-TownShowdown.png'
import SideBar from './components/sideBar/SideBar'
import Graphic from './components/graphic/Graphic'
import teams from './static/teamPositions'
import './assets/fonts.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: Background,
      bracketType: Bracket,
      bracketNumber: 1,
      logo: Logo,
      width: 1024,
      height: 512,
      eventId: null,
      event: null,
      title: "17U Pool 1 Standings",
      teams: teams['SinglePool'],
      division: "17U",
      divisions: [],
      pool: null,
      pools: [],
    }
  }

  render() {
    const setBackgroundImage = (backgroundImage) => { this.setState({ backgroundImage }) }
    const setBracketImage = (bracketType) => { this.setState({ bracketType }) }
    const setLogoImage = (logo) => { this.setState({ logo }) }
    const setWidth = (width) => { this.setState({ width }) }
    const setHeight = (height) => { this.setState({ height }) }
    const setEventId = (eventId) => { this.setState({ eventId }) }
    const setEvent = (event) => { this.setState({ event }) }
    const setTeams = (teams) => { this.setState({ teams }) }
    const setTitle = (title) => { this.setState({ title }) }
    const setBracketNumber = (bracketNumber) => { this.setState({ bracketNumber }) }
    const setDivision = (division) => { this.setState({ division }) }
    const setDivisions = (divisions) => { this.setState({ divisions }) }
    const setPool = (pool) => { this.setState({ pool }) }
    const setPools = (pools) => { this.setState({ pools }) }

    return (
      <div className="app-container">
        <div className="app">
          <SideBar
            setBackgroundImage={setBackgroundImage}
            setBracketImage={setBracketImage}
            setLogoImage={setLogoImage}
            setWidth={setWidth}
            setHeight={setHeight}
            event={this.state.event}
            setEventId={setEventId} eventId={this.state.eventId}
            setEvent={setEvent}
            setTitle={setTitle} title={this.state.title}
            teams={this.state.teams} setTeams={setTeams}
            bracketNumber={this.state.bracketNumber} setBracketNumber={setBracketNumber}
            // Division
            division={this.state.division}
            setDivision={setDivision}
            divisions={this.state.divisions}
            setDivisions={setDivisions}
            // Pool
            pool={this.state.pool}
            pools={this.state.pools}
            setPool={setPool}
            setPools={setPools}
          />

          <Graphic
            eventId={this.state.eventId}
            teams={this.state.teams}
            backgroundImage={this.state.backgroundImage}
            bracketType={this.state.bracketType}
            logo={this.state.logo}
            width={this.state.width}
            height={this.state.height}
            title={this.state.title}
            event={this.state.event}
            division={this.state.division}
          />
        </div>
      </div>
    );
  }
}

export default App;
