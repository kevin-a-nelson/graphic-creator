import React, { setState } from 'react';
import './App.css';
import Background from "./assets/Backgrounds/SpaceCityCollision.png"
import SideBar from './components/sideBar/SideBar'
import dropDowns from './dropDowns/dropDowns'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      background: Background
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello?</h1>
        <SideBar
          dropDowns={dropDowns}
        />
      </div>
    );
  }
}

export default App;
