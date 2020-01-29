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
            return (
                <div className="bracket expand" style={{ backgroundImage: `url(${bracket})` }}></div>
            )
        }

        const Logo = () => {

            const logoStyle = {
                width: `${width / 6}px`,
                right: `${width / 85}px`,
                bottom: `${width / 8}px`
            }

            return (
                <div className="logo" style={logoStyle}>
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

            let tempTeams = teams['8-teams'];

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