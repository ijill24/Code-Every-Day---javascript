const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = arr => {
  arr.forEach(politelyDecline)
}

const acceptEverything = arr => {
  for (var i = 0; i < arr.length; i++) {
    console.log(`Ok, I guess I will eat some ${arr[i]}.`)
  }
}

acceptEverything(veggies)


//map function practice
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = arr => arr.map(toSquare);

console.log(squareNums(numbers));