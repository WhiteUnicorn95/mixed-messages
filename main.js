// lover finder project

//example output: "You will find your lover in 5 years, you will stay together 10 years and they will be 40% toxic."

//function that generates a random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

//generate random number of years in which you'll find them
function howLongToWait() {
    return getRandomInt(80);
};

let timeToWait = howLongToWait();

//generate random number of years or months you'll stay with them
function howLongToStay() {
    //makes sure that time to wait and time to stay isn't longer than 100 years in total
    const timeMax = 100 - timeToWait;
    return getRandomInt(timeMax);
};

let timeToStay = howLongToStay();

//generate random level of toxicity
let toxicityLevel = getRandomInt(100);

console.log('You will find your lover in ' + timeToWait + ' years. You will stay together for ' + timeToStay + ' years and they will be ' + toxicityLevel + '% toxic.');