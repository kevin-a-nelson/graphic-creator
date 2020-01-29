import React from 'react'
import EditableLabel from 'react-editable-label';
import './graphic.scss'
import teams from '../../static/teamPositions'

export default class Graphic extends React.Component {
    render() {

        const {
            backgroundImage,
            bracket,
            logo,
            width,
            height
        } = this.props;

        const Background = () => { return (<div className="background expand" style={{ backgroundImage: `url(${backgroundImage})` }}></div>) }
        const Bracket = () => {
            let tempBracket = "/static/media/16TeamBracket.12461966.png"
            return (
                <div className="bracket expand" style={{ backgroundImage: `url(${tempBracket})` }}></div>
            )
        }

        const Logo = () => {
            return (
                <div className="logo" style={{ width: `${width / 6}px`, right: `${width / 85}px`, top: `${width / 85}px` }}>
                    <div className="img-container">
                        <img src={logo} alt="logo" />
                    </div>
                </div >
            )
        }
        const Title = () => {
            return (
                <div className="title">
                    <EditableLabel
                        initialValue={'Title'}
                        save={value => { console.log(`Saving '${value}'`); }}
                    />
                </div>
            )
        }

        const TeamNames = () => {

            let tempTeams = teams['16-teams'];

            console.log(bracket)

            if (bracket.includes("16Team")) {
                tempTeams = teams['16-teams'];
            }

            return (
                tempTeams.map((team, idx) => {
                    return (
                        <div className="team-name" style={{
                            top: team.top,
                            left: team.left,
                            zIndex: 10 + idx
                        }}>
                            <EditableLabel
                                initialValue={team.name}
                                save={value => { console.log(`Saving '${value}'`); }}
                            />
                        </div>
                    )
                })
            )
        }

        return (
            <div className="graphic-container" >
                <div className="graphic"
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