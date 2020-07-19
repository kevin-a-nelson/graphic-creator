// const CryptoJS = require('crypto-js')
// const fetch = require('node-fetch')

// const apiKey = "0s909vSu9kdkDA"
// const timeStamp = new Date().toISOString()
// const path = `${apiKey}&get&${timeStamp}&/api/v1/games`
// const message = path.toUpperCase()
// const secretKey = "99b9M99999U99h99ptKas93Mf99I9j9t"
// const hash = CryptoJS.HmacSHA256(message, secretKey);
// const hashString = hash.toString(CryptoJS.enc.Base64);
// const authentication = `${apiKey}.${hashString}`
// const url = "https://basketball.exposureevents.com/api/v1/games?eventid=109495"

// const headers = {
//     'headers': {
//         'Authentication': authentication,
//         'Timestamp': timeStamp,
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     }
// }

// fetch(url, headers)
//     .then(res => res.json())
//     .then(data => console.log(data));
