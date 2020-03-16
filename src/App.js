import React, { setState } from 'react';
import './App.css';
import Background from "./assets/Backgrounds/SpaceCityCollision.png"
import Bracket from "./assets/Brackets/8TeamBracket.png"
import Logo from './assets/2020CircuitLogos/A-TownShowdown.png'
import SideBar from './components/sideBar/SideBar'
import Graphic from './components/graphic/Graphic'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: Background,
      bracket: Bracket,
      logo: Logo,
      width: 960,
      height: 540,
      eventId: 0,
    }
  }

  render() {

    const setBackgroundImage = (backgroundImage) => { this.setState({ backgroundImage }) }
    const setBracketImage = (bracket) => { this.setState({ bracket }) }
    const setLogoImage = (logo) => { this.setState({ logo }) }
    const setWidth = (width) => { this.setState({ width }) }
    const setHeight = (height) => { this.setState({ height }) }
    const setEventId = (eventId) => { this.setState({ eventId }) }

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
          />
          <Graphic
            eventId={this.state.eventId}
            backgroundImage={this.state.backgroundImage}
            bracket={this.state.bracket}
            logo={this.state.logo}
            width={this.state.width}
            height={this.state.height}
          />
        </div>
      </div>
    );
  }
}

export default App;
