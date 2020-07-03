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
      width: 960,
      height: 540,
      eventId: null,
      title: "17U Pool 1 Standings",
      teams: teams['TenPools'],
      division: null,
    }
  }

  render() {

    const setBackgroundImage = (backgroundImage) => { this.setState({ backgroundImage }) }
    const setBracketImage = (bracketType) => { this.setState({ bracketType }) }
    const setLogoImage = (logo) => { this.setState({ logo }) }
    const setWidth = (width) => { this.setState({ width }) }
    const setHeight = (height) => { this.setState({ height }) }
    const setEventId = (eventId) => { this.setState({ eventId }) }
    const setTeams = (teams) => { this.setState({ teams }) }
    const setTitle = (title) => { this.setState({ title }) }
    const setBracketNumber = (bracketNumber) => { this.setState({ bracketNumber }) }
    const setDivision = (division) => { this.setState({ division }) }

    return (
      <div className="app-container">
        <div className="app">
          <SideBar
            setBackgroundImage={setBackgroundImage}
            setBracketImage={setBracketImage}
            setLogoImage={setLogoImage}
            setWidth={setWidth}
            setHeight={setHeight}
            setEventId={setEventId}
            eventId={this.state.eventId}
            setTitle={setTitle}
            title={this.state.title}
            teams={this.state.teams}
            setTeams={setTeams}
            bracketNumber={this.state.bracketNumber}
            setBracketNumber={setBracketNumber}
            division={this.state.division}
            setDivision={setDivision}
          />

          <Graphic
            eventId={this.state.eventId}
            teams={this.state.teams} backgroundImage={this.state.backgroundImage}
            bracketType={this.state.bracketType}
            logo={this.state.logo}
            width={this.state.width}
            height={this.state.height}
            title={this.state.title}
          />
        </div>
      </div>
    );
  }
}

export default App;
