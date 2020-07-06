
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

    "SinglePool": {
        // Event Name
        bracketImage: TenPoolBracket,
        logo: {
            width: 5.4,
            right: 3.4,
            bottom: 2.1,
        },
        text: [
            { top: '5%', left: "7%", name: "6th Seed" },
            { top: "66.7%", left: "7%", name: "11th Seed" },
            { top: "72%", left: "7%", name: "7th Seed" },
            { top: "78%", left: "7%", name: "10th Seed" },
            { top: "83.7%", left: "7%", name: "9th Seed" },
            { top: "89%", left: "7%", name: "8th Seed" },
            // Second Round
            { top: "7.5%", left: "24%", name: "Winner of Match" },
            { top: "19%", left: "24%", name: "Winner of Match" },
            { top: "30%", left: "24%", name: "Winner of Match" },
            { top: "41%", left: "23%", name: "Winner of Match" },
            { top: "52%", left: "23%", name: "Winner of Match" },
            { top: "63.5%", left: "22%", name: "Winner of Match" },
            { top: "75%", left: "22%", name: "Winner of Match" },
            { top: "86%", left: "21%", name: "Winner of Match" },
            // Third Round
            { top: "12.4%", left: "41%", name: "Winner of Match" },
            { top: "35%", left: "41%", name: "Winner of Match" },
            { top: "58%", left: "40%", name: "Winner of Match" },
            { top: "80.5%", left: "39%", name: "Winner of Match" },
            // Fourth Round
            { top: "24%", left: "56%", name: "Winner of Match" },
            { top: "69%", left: "56%", name: "Winner of Match" },
            // Champion
            { top: "47%", left: "73%", name: "Winner of Match" },
        ],
    },
    "TenPools": {
        // Event Name
        bracketImage: TenPoolBracket,
        logo: {
            width: 5.4,
            right: 3.4,
            bottom: 2.1,
        },
        text: [
            { top: '5%', left: "7%", name: "6th Seed" },
            { top: "66.7%", left: "7%", name: "11th Seed" },
            { top: "72%", left: "7%", name: "7th Seed" },
            { top: "78%", left: "7%", name: "10th Seed" },
            { top: "83.7%", left: "7%", name: "9th Seed" },
            { top: "89%", left: "7%", name: "8th Seed" },
            // Second Round
            { top: "7.5%", left: "24%", name: "Winner of Match" },
            { top: "19%", left: "24%", name: "Winner of Match" },
            { top: "30%", left: "24%", name: "Winner of Match" },
            { top: "41%", left: "23%", name: "Winner of Match" },
            { top: "52%", left: "23%", name: "Winner of Match" },
            { top: "63.5%", left: "22%", name: "Winner of Match" },
            { top: "75%", left: "22%", name: "Winner of Match" },
            { top: "86%", left: "21%", name: "Winner of Match" },
            // Third Round
            { top: "12.4%", left: "41%", name: "Winner of Match" },
            { top: "35%", left: "41%", name: "Winner of Match" },
            { top: "58%", left: "40%", name: "Winner of Match" },
            { top: "80.5%", left: "39%", name: "Winner of Match" },
            // Fourth Round
            { top: "24%", left: "56%", name: "Winner of Match" },
            { top: "69%", left: "56%", name: "Winner of Match" },
            // Champion
            { top: "47%", left: "73%", name: "Winner of Match" },
        ],
    }
}