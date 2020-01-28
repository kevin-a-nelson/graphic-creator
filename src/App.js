import React, { setState } from 'react';
import './App.css';
import Background from "./assets/Backgrounds/SpaceCityCollision.png"
import Bracket from "./assets/Brackets/8TeamBracket.png"
import SideBar from './components/sideBar/SideBar'
import dropDowns from './dropDowns/dropDowns'
import Graphic from './components/graphic/Graphic'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: Background,
      bracket: Bracket
    }
  }

  render() {

    const setBackgroundImage = (backgroundImage) => { this.setState({ backgroundImage }) }
    const setBracketImage = (bracket) => { this.setState({ bracket }) }

    return (
      <div className="app-container">
        <div className="app">
          <SideBar
            dropDowns={dropDowns}
            setBackgroundImage={setBackgroundImage}
            setBracketImage={setBracketImage}
          />
          <Graphic
            backgroundImage={this.state.backgroundImage}
            bracket={this.state.bracket}
          />
        </div>
      </div>
    );
  }
}

export default App;
