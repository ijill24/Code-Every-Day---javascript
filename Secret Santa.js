//define assignment array
let givers = ['Michael Scott', 'Dwight Schrute', 'Jim Halpert', 'Pam Beesley', 'Jan Levinson', 'Kevin Malone', 'Toby Flenderson', 'Angela Martin', 'Andy Bernard', 'Stanley Hudson', 'Ryan Howard', 'Kelly Kapoor']

//function to shuffle arrays
const shuffle = arr1 => {
    return arr1
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}

//define receiver array which is randomized version of the original
let shuffledReceiver = shuffle(givers);

//code check - debugging
// console.log(givers)
// console.log(shuffledReceiver)

//compare two arrays
// for(var i = 0; i < givers.length; i++) {
//     if(givers[i] === shuffledReceiver[i]) {}
        


//create empty object and fill
const secretSanta = {}


for (var i = 0; i < givers.length; i++) {
    secretSanta[givers[i]] = shuffledReceiver[i];
}

console.log(secretSanta)


