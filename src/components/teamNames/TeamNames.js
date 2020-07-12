import React from 'react'
import "./teamNames.scss"
import EditableLabel from 'react-editable-label';


class TeamNames extends React.Component {


    render() {
        const teamNameStyle = (team) => {
            return {
                top: team.top,
                left: team.left,
                zIndex: 10,
                ...team.style,
            }
        }
        return (
            this.props.teams.text.map((team) => {
                return (
                    <div style={teamNameStyle(team)}>
                        {team.name}
                        {/* <EditableLabel */}
                        {/* initialValue={team.name} */}
                        {/* save={value => { console.log(`Saving ${value}`) }} */}
                        {/* /> */}
                    </div>
                )
            })
        )
    }
}

export default TeamNames