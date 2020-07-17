import React, { setState } from 'react';
import './App.css';
import Background from "./assets/Backgrounds/SpaceCityCollision.png"
import Bracket from "./assets/Brackets/TenPools.png"
import Logo from './assets/2020CircuitLogos/A-TownShowdown.png'
import SideBar from './components/sideBar/SideBar'
import Graphic from './components/graphic/Graphic'
import teams from './static/teamPositions'
import './assets/fonts.css'

// LZW-compress a string
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

// Decompress an LZW-encoded string
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
      // teams: teams['TenPools'],
      teams: teams['TenPools'],
      division: "17U",
      divisions: [],
      pool: null,
      pools: [],
      showSideBar: true,
    }
  }

  componentDidMount() {
    const url_string = window.location.href
    const url = new URL(url_string);
    const compressedEvent = url.searchParams.get("texts");
    const display = url.searchParams.get("display") || "TenPools"


    if (!compressedEvent) {
      return
    }

    let event = lzw_decode(compressedEvent)
    event = event.replace("_HASHTAG", "#")


    event = JSON.parse(event)

    let newTeams = teams[display]

    for (let i = 0; i < newTeams.text.length; i++) {
      newTeams.text[i].name = event[i]
    }

    this.setState({ teams: newTeams })
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
          {
            this.state.showSideBar ?
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
              /> : null
          }

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
