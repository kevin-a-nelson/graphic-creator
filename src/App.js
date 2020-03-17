import React, { setState } from 'react';
import './App.css';
import Background from "./assets/Backgrounds/SpaceCityCollision.png"
import Bracket from "./assets/Brackets/4TeamBracket.png"
import Logo from './assets/2020CircuitLogos/A-TownShowdown.png'
import SideBar from './components/sideBar/SideBar'
import Graphic from './components/graphic/Graphic'
import teams from './static/teamPositions'
// import htmlToImage from 'html-to-image';

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
      eventId: 0,
      title: "19's - 20's Example Bracket",
      teams: teams['4-teams'],
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
          />
        </div>
      </div>
    );
  }
}

export default App;
