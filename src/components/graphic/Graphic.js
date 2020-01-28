import React from 'react'
import EditableLabel from 'react-editable-label';
import './graphic.scss'


const teams = [
    // First Round
    { top: "100px", left: "50px", name: "1st Seed" },
    { top: "155px", left: "50px", name: "8th Seed" },
    { top: "210px", left: "45px", name: "2nd Seed" },
    { top: "265px", left: "45px", name: "7th Seed" },
    { top: "314px", left: "40px", name: "3rd Seed" },
    { top: "369px", left: "40px", name: "6th Seed" },
    { top: "420px", left: "35px", name: "4th Seed" },
    { top: "475px", left: "35px", name: "5th Seed" },
    // Second Round
    { top: "130px", left: "280px", name: "Winner of Match One" },
    { top: "237px", left: "275px", name: "Winnter of Match Two" },
    { top: "340px", left: "270px", name: "Winner of Match Three" },
    { top: "445px", left: "265px", name: "Winner of Match Four" },
    // Third Round
    { top: "180px", left: "490px", name: "Winner of Match 5" },
    { top: "393px", left: "480px", name: "Winner of Match 6" },
    // Champion!
    { top: "290px", left: "700px", name: "Champions" }

]

export default class Graphic extends React.Component {
    render() {

        const Background = () => { return (<div className="background large" style={{ backgroundImage: `url(${backgroundImage})` }}></div>) }
        const Bracket = () => { return (<div className="bracket large" style={{ backgroundImage: `url(${bracket})` }}></div>) }
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
            return (
                teams.map((team, idx) => {
                    return <div className="team-name" style={{ top: team.top, left: team.left, zIndex: 10 + idx }}> {team.name}</div>
                })
            )
        }

        const { backgroundImage, bracket, logo } = this.props;

        return (
            <div className="graphic-container">
                <div className="graphic large">
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