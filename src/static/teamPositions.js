
import TenPoolBracket from "../assets/Brackets/TenPools.png"
import SinglePoolBracket from "../assets/Brackets/SinglePool.png"

const teamName = {
    fontWeight: 600,
    fontSize: '1em',
    color: 'white',
    position: 'absolute',
    textTransform: 'uppercase',
    fontStyle: 'italic'
}

const title = {
    fontSize: '1.12em',
    fontWeight: 900,
    color: 'white',
    textTransform: 'uppercase'
}

const teamPlace = {
    fontSize: '0.8em',
    color: 'white',
}

const teamRecord = {
    fontSize: '0.5em',
    color: 'white',
}

const singlePool = {
    teamName: {
        fontSize: '0.9em',
        fontWeight: 300,
        color: 'white',
        fontStyle: 'italic',
        fontFamily: 'Fjalla One',
    },
    eventName: {
        fontSize: '1.5em',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Fjalla One',
        textTransform: 'uppercase',
        // fontStyle: 'italic',
    },
    poolLabel: {
        fontSize: '1.1em',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Fjalla One',
        textTransform: 'uppercase',
    },
}

const tenPools = {
    teamName: {
        fontSize: '0.4em',
        fontWeight: 300,
        color: 'white',
        fontFamily: 'Bebas Neue',
        fontStyle: 'italic',
    },
    eventName: {
        fontSize: '0.7em',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Fjalla One',
        textTransform: 'uppercase',
        fontStyle: 'italic',
        width: '200px',
    },
    poolLabel: {
        fontSize: '0.5em',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Fjalla One',
        textTransform: 'uppercase'
    },
}


function add(position, increment) {
    return `${position + increment}%`
}



// 5.3

export default {
    "TenPools": {
        // Event Name
        bracketImage: TenPoolBracket,
        logo: {
            width: 5.4,
            right: 3.4,
            bottom: 2.1,
        },
        text: [
            // Constants
            { top: '8%', left: '27.5%', name: 'Event Name', style: tenPools.eventName, isConstant: true },
            { top: `${5.2}%`, left: '17%', name: 'Pool 1', style: tenPools.poolLabel, isConstant: true },
            { top: `${37}%`, left: '17%', name: 'Pool 2', style: tenPools.poolLabel, isConstant: true },
            { top: `${68.9}%`, left: '17%', name: 'Pool 3', style: tenPools.poolLabel, isConstant: true },
            { top: `${37}%`, left: '41.2%', name: 'Pool 4', style: tenPools.poolLabel, isConstant: true },
            { top: `${68.9}%`, left: '41.3%', name: 'Pool 5', style: tenPools.poolLabel, isConstant: true },
            { top: `${37}%`, left: '65.3%', name: 'Pool 6', style: tenPools.poolLabel, isConstant: true },
            { top: `${68.9}%`, left: '65.5%', name: 'Pool 7', style: tenPools.poolLabel, isConstant: true },
            { top: `${5.2}%`, left: '90%', name: 'Pool 8', style: tenPools.poolLabel, isConstant: true },
            { top: `${37}%`, left: '90%', name: 'Pool 9', style: tenPools.poolLabel, isConstant: true },
            { top: `${68.9}%`, left: '89%', name: 'Pool 10', style: tenPools.poolLabel, isConstant: true },
            // Pool 1
            { top: '11.6%', left: '3.5%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${11.6 + 5.3}%`, left: '3.5%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${11.6 + 5.3 * 2}%`, left: '3.5%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${11.6 + 5.3 * 3}%`, left: '3.5%', name: 'Team Name 1', style: tenPools.teamName },
            // Pool 2
            { top: `${43.7}%`, left: '3.5%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${43.7 + 5.3}%`, left: '3.5%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${43.7 + 5.3 * 2 - 0.3}%`, left: '3.5%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${43.7 + 5.3 * 3 - 0.4}%`, left: '3.5%', name: 'Team Name 1', style: tenPools.teamName },
            // Pool 3
            { top: `${75.2}%`, left: '3.5%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${75.2 + 5.3}%`, left: '3.5%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${75.2 + 5.3 * 2}%`, left: '3.5%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${75.2 + 5.3 * 3}%`, left: '3.5%', name: 'Team Name 1', style: tenPools.teamName },
            // Pool 4
            { top: `${75.3}%`, left: '27.9%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${75.3 + 5.3}%`, left: '27.9%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${75.3 + 5.3 * 2 - 0.3}%`, left: '27.9%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${75.3 + 5.3 * 3 - 0.4}%`, left: '27.9%', name: 'Team Name 1', style: tenPools.teamName },
            // Pool 5
            { top: `${43.7}%`, left: '27.9%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${43.7 + 5.3}%`, left: '27.9%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${43.7 + 5.3 * 2 - 0.3}%`, left: '27.9%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${43.7 + 5.3 * 3 - 0.4}%`, left: '27.9%', name: 'Team Name 1', style: tenPools.teamName },
            // Pool 6
            { top: `${75.3}%`, left: '52%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${75.3 + 5.3}%`, left: '52%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${75.3 + 5.3 * 2 - 0.3}%`, left: '52%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${75.3 + 5.3 * 3 - 0.4}%`, left: '52%', name: 'Team Name 1', style: tenPools.teamName },
            // Pool 7
            { top: `${43.7}%`, left: '52%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${43.7 + 5.3}%`, left: '52%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${43.7 + 5.3 * 2 - 0.3}%`, left: '52%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${43.7 + 5.3 * 3 - 0.4}%`, left: '52%', name: 'Team Name 1', style: tenPools.teamName },
            // Pool 8
            { top: `${11.6}%`, left: '76.7%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${11.6 + 5.3}%`, left: '76.7%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${11.6 + 5.3 * 2 - 0.3}%`, left: '76.7%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${11.6 + 5.3 * 3 - 0.4}%`, left: '76.7%', name: 'Team Name 1', style: tenPools.teamName },
            // Pool 9
            { top: `${43.6}%`, left: '76.7%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${43.6 + 5.3}%`, left: '76.7%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${43.6 + 5.3 * 2 - 0.3}%`, left: '76.7%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${43.6 + 5.3 * 3 - 0.4}%`, left: '76.7%', name: 'Team Name 1', style: tenPools.teamName },
            // Pool 10
            { top: `${75.3}%`, left: '76.7%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${75.3 + 5.3}%`, left: '76.7%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${75.3 + 5.3 * 2 - 0.3}%`, left: '76.7%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${75.3 + 5.3 * 3 - 0.4}%`, left: '76.7%', name: 'Team Name 1', style: tenPools.teamName },
        ],
    },
    "SinglePool": {
        // Event Name
        bracketImage: SinglePoolBracket,
        logo: {
            width: 5.4,
            right: 3.4,
            bottom: 2.1,
        },
        text: [
            // Constants
            // Pool 1
            { top: '11.6%', left: '3.5%', name: 'Team Name 1', style: tenPools.teamName },
            { top: `${11.6 + 5.3}%`, left: '3.5%', name: 'Team Name 2', style: tenPools.teamName },
            { top: `${11.6 + 5.3 * 2}%`, left: '3.5%', name: 'Team Name 3', style: tenPools.teamName },
            { top: `${11.6 + 5.3 * 3}%`, left: '3.5%', name: 'Team Name 4', style: tenPools.teamName },
        ],
    },
}