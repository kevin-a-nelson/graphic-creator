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
    }
  }

  render() {

    const setBackgroundImage = (backgroundImage) => { this.setState({ backgroundImage }) }
    const setBracketImage = (bracket) => { this.setState({ bracket }) }
    const setLogoImage = (logo) => { this.setState({ logo }) }

    return (
      <div className="app-container">
        <div className="app">
          <SideBar
            setBackgroundImage={setBackgroundImage}
            setBracketImage={setBracketImage}
            setLogoImage={setLogoImage}
          />
          <Graphic
            backgroundImage={this.state.backgroundImage}
            bracket={this.state.bracket}
            logo={this.state.logo}
          />
        </div>
      </div>
    );
  }
}

export default App;
