//define assignment array
const givers = ['Michael Scott', 'Dwight Schrute', 'Jim Halpert', 'Pam Beesley', 'Jan Levinson', 'Kevin Malone', 'Toby Flenderson', 'Angela Martin', 'Andy Bernard', 'Stanley Hudson', 'Ryan Howard', 'Kelly Kapoor']

//define giver and receiver arrays which are randomized versions of the original

let shuffledReceiver = givers
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

//check array function

console.log(shuffledReceiver)


//compare array 1 and 2 to check for any matches at the same position, if so reshuffle.

//log results to the console.
// for (const name of givers) {
//     console.log(