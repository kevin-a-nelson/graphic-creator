import React, { useState } from 'react'
import EditableLabel from 'react-editable-label'
import axiosInstance from '../../AxiosInstance'


class TeamNames extends React.Component {


    render() {
        const teamNameStyle = (team) => {
            return {
                top: team.top,
                left: team.left,
                zIndex: 10,
            }
        }
        return (
            this.props.teams.map((team, idx) => {
                return (
                    <div className="team-name" style={teamNameStyle(team)}>
                        {team.name}
                        {/* <EditableLabel
                            initialValue={team.name}
                            save={value => { console.log(`Saving '${value}'`); }}
                        /> */}
                    </div >
                )
            })
        )
    }
}

export default TeamNames