import React from 'react'
import EditableLabel from 'react-editable-label';
import './graphic.scss'
import teams from '../../static/teamPositions'
import Draggable from 'react-draggable'
import Bracket from '../bracket/Bracket'
import Background from '../background/Background'

export default class Graphic extends React.Component {
    render() {

        const {
            backgroundImage,
            bracket,
            logo,
            width,
            height,
            eventId,
        } = this.props;

        const Logo = () => {

            const logoStyle = {
                width: `${width / 6}px`,
                right: `${width / 25}px`,
                bottom: `${width / 7}px`
            }

            return (
                <Draggable>
                    <div className="logo" style={logoStyle}>
                        <div className="img-container">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                </Draggable>
            )
        }

        const Title = () => {
            return (
                <div className="title"
                    style={
                        { marginTop: `${width / 100}px` }
                    }
                >
                    <i>
                        <EditableLabel
                            initialValue={"19's - 20's EXAMPLE BRACKET"}
                            save={value => { console.log(`Saving '${value}'`); }}
                        />
                    </i>
                </div >
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
                    <h1>{eventId}</h1>
                    <Title />
                    <Bracket
                        bracket={bracket}
                    />
                    <Logo />
                    <TeamNames />
                    <Background
                        backgroundImage={backgroundImage}
                    />
                </div>
            </div >
        )
    }
}