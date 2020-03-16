import React from 'react'
import teams from '../../static/teamPositions'
import EditableLabel from 'react-editable-label'


const TeamNames = (props) => {

    const { bracket } = props

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

export default TeamNames