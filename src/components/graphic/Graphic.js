import React from 'react'
import EditableLabel from 'react-editable-label';
import './graphic.scss'
import teams from '../../static/teamPositions'

export default class Graphic extends React.Component {
    render() {

        const { backgroundImage, bracket, logo, width, height } = this.props;

        const Background = () => { return (<div className="background expand" style={{ backgroundImage: `url(${backgroundImage})` }}></div>) }
        const Bracket = () => { return (<div className="bracket expand" style={{ backgroundImage: `url(${bracket})` }}></div>) }
        const Logo = () => { return (<div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>) }
        const Title = () => {
            return (
                <div className="title">
                    <EditableLabel
                        initialValue={'World'}
                        save={value => { console.log(`Saving '${value}'`); }}
                    />
                </div>
            )
        }

        const TeamNames = () => {

            let tempTeams = teams['eightTeams'];

            return (
                tempTeams.map((team, idx) => {
                    return <div className="team-name" style={{
                        top: team.top,
                        left: team.left,
                        zIndex: 10 + idx
                    }}> {team.name}</div>
                })
            )
        }

        return (
            <div className="graphic-container">
                <div className="graphic large"
                    style={{ width: `${width}px`, height: `${height}px`, fontSize: `${width / 67}px` }}
                >
                    <Title />
                    <Bracket />
                    <Logo />
                    <TeamNames />
                    <Background />
                </div>
            </div >
        )
    }
}