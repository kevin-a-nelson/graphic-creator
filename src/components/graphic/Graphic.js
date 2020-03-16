import React from 'react'
import './graphic.scss'
import Bracket from '../bracket/Bracket'
import Background from '../background/Background'
import Logo from '../logo/Logo'
import Title from '../title/Title'
import TeamNames from '../teamNames/TeamNames'

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

        return (
            <div className="graphic-container" >
                <div className="graphic"
                    style={{ width: `${width}px`, height: `${height}px`, fontSize: `${width / 67}px` }}
                >
                    <Title
                        width={width}
                    />
                    <Bracket
                        bracket={bracket}
                    />
                    <Logo
                        width={width}
                        logo={logo}
                    />
                    <TeamNames
                        bracket={bracket}
                        eventId={eventId}
                    />
                    <Background
                        backgroundImage={backgroundImage}
                    />
                </div>
            </div >
        )
    }
}