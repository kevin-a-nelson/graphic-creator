import React from 'react'
import './graphic.scss'
import Bracket from '../bracket/Bracket'
import Background from '../background/Background'
import Logo from '../logo/Logo'
import TeamNames from '../teamNames/TeamNames'

export default class Graphic extends React.Component {
    render() {
        const {
            backgroundImage,
            bracketType,
            logo,
            width,
            height,
            teams,
        } = this.props;

        const graphicStyle = {
            width: `${width}px`,
            height: `${height}px`,
            fontSize: '50px'
        }

        return (
            <div className="center-vertically">
                <div id="graphic"
                    style={graphicStyle}
                >
                    {/* 
                    <Title
                        width={width}
                        title={title}
                    />
                     */}
                    <Bracket
                        bracketType={teams.bracketImage}
                    />
                    <Logo
                        width={width}
                        logoDim={teams.logo}
                        logo={logo}
                    />
                    <TeamNames
                        teams={teams}
                    />
                    <Background
                        backgroundImage={backgroundImage}
                    />
                </div>
            </div>
        )
    }
}