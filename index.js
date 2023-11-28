const { getModulesPluginNames } = require("@babel/preset-env");

// Code your solutions in this file
function writeCards(names ,purp) {
    let messages = [];
    for(let i = 0; i < names.length; i++) {
        messages[i] = "Thank you, " + names[i] + ", for the wonderful " + purp + " gift!";
    }
    return messages;
}

function countDown(n) {
    while(n >= 0) {
        console.log(n);
        n--;
    }
}