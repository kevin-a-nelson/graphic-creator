import React, { setState } from 'react';
import './App.css';
import Background from "./assets/Backgrounds/SpaceCityCollision.png"
import SideBar from './components/sideBar/SideBar'
import dropDowns from './dropDowns/dropDowns'
import Graphic from './components/graphic/Graphic'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: Background
    }
  }

  render() {

    const setBackgroundImage = (background) => { this.setState({ backgroundImage: background }) }

    return (
      <div className="app-container">
        <div className="app">
          <SideBar
            dropDowns={dropDowns}
            setBackgroundImage={setBackgroundImage}
          />
          <Graphic
            backgroundImage={this.state.backgroundImage}
          />
        </div>
      </div>
    );
  }
}

export default App;
