
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

const tenPools = {
    teamNames: {
        fontSize: '0.3em',
        color: 'white',
    }
}

export default {
    "TenPools": [
        // Pool 2
        { top: "5%", left: "4%", name: "Team Name 1", style: tenPools.teamNames },
        { top: "29%", left: "25%", name: "Team Name 2", style: tenPools.teamNames },
    ],
    "SinglePool": [
        // First Round
        { top: "8%", left: "25%", name: "17U Pool 1 Standings", style: title },
        { top: "29%", left: "25%", name: "Pool 1", style: title },
        // First Seed
        { top: "44%", left: "23.5%", name: "1st", style: teamPlace },
        { top: "46%", left: "31%", name: "0-1", style: teamRecord },
        { top: "43%", left: "42%", name: "First Seed", style: teamName },
        // Second Seed
        { top: "55.5%", left: "23.5%", name: "1st", style: teamPlace },
        { top: "55.5%", left: "31%", name: "0-1", style: teamRecord },
        { top: "54.5%", left: "42%", name: "Second Seed", style: teamName },
        // Third Seed
        { top: "66%", left: "23.5%", name: "1st", style: teamPlace },
        { top: "66%", left: "31%", name: "0-1", style: teamRecord },
        { top: "66%", left: "42%", name: "Third Seed", style: teamName },
        // Fourth Seed
        { top: "77.5%", left: "23.5%", name: "1st", style: teamPlace },
        { top: "77.5%", left: "31%", name: "0-1", style: teamRecord },
        { top: "77.5%", left: "42%", name: "Fourth Seed", style: teamName },
    ],
    "4-teams": [
        // First Round
        { top: "25%", left: "9.2%", name: "First Seed" },
        { top: "44.5%", left: "8.7%", name: "Second Seed" },
        { top: "64%", left: "8%", name: "Third Seed" },
        { top: "83.5%", left: "7.5%", name: "Fifth Seed" },
        // Second Round
        { top: "35%", left: "32%", name: "Winner of Game 1" },
        { top: "74%", left: "31%", name: "Winner of Game 2" },
        // Champion!
        { top: "54%", left: "53%", name: "Champions" },
    ],
    "8-teams": [
        // First Round
        { top: "19%", left: "5%", name: "FIRST SEED" },
        { top: "29%", left: "5%", name: "SECOND SEED" },
        { top: "39%", left: "5%", name: "THIRD SEED" },
        { top: "49%", left: "5%", name: "FOURTH SEED" },
        { top: "59%", left: "5%", name: "FIFTH SEED" },
        { top: "68.8%", left: "5%", name: "SIXTH SEED" },
        { top: "78%", left: "5%", name: "SEVENTH SEED" },
        { top: "88%", left: "5%", name: "EIGHT SEED" },
        // Second Round
        { top: "24%", left: "29%", name: "MATCH ONE WINNER" },
        { top: "44%", left: "29%", name: "MATCH TWO WINNER" },
        { top: "63%", left: "29%", name: "MATCH THREE WINNER" },
        { top: "83%", left: "29%", name: "MATCH FOUR WINNER" },
        // Third Round
        { top: "34%", left: "52%", name: "MATCH FIVE WINNER" },
        { top: "73%", left: "52%", name: "MATCH SIX WINNER" },
        // Champion!
        { top: "53.5%", left: "75%", name: "CHAMPIONS" }
    ],
    "16-teams": [
        // First Round
        { top: "4%", left: "7%", name: "1st Seed Team" },
        { top: "10%", left: "7%", name: "16th Seed" },
        { top: "16%", left: "7%", name: "2nd Seed" },
        { top: "22%", left: "7%", name: "15th Seed" },
        { top: "27.3%", left: "7%", name: "3rd Seed" },
        { top: "33%", left: "7%", name: "14th Seed" },
        { top: "38.5%", left: "7%", name: "4th Seed" },
        { top: "43.8%", left: "7%", name: "13th Seed" },
        { top: "49.8%", left: "7%", name: "5th Seed" },
        { top: "55.8%", left: "7%", name: "12th Seed" },
        { top: "61.1%", left: "7%", name: "6th Seed" },
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
    "32-teams": [
        // First Round
        { top: "2%", left: "50px", name: "1st Seed" },
        { top: "155px", left: "50px", name: "8th Seed" },
        { top: "210px", left: "45px", name: "2nd Seed" },
        { top: "265px", left: "45px", name: "7th Seed" },
        { top: "314px", left: "40px", name: "3rd Seed" },
        { top: "369px", left: "40px", name: "6th Seed" },
        { top: "420px", left: "35px", name: "4th Seed" },
        { top: "475px", left: "35px", name: "5th Seed" },
        // Second Round
        { top: "130px", left: "280px", name: "Winner of Match One" },
        { top: "237px", left: "275px", name: "Winner of Match Two" },
        { top: "340px", left: "270px", name: "Winner of Match Three" },
        { top: "445px", left: "265px", name: "Winner of Match Four" },
        // Third Round
        { top: "180px", left: "490px", name: "Winner of Match 5" },
        { top: "393px", left: "480px", name: "Winner of Match 6" },
        // Champion!
        { top: "290px", left: "700px", name: "Champions" }
    ],
}
