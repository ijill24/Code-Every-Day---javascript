// Write your code here:
const shoutGreetings = arr => {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr.push(arr[i].toUpperCase() + '!');
    }
    return newArr;
  }
  
  
  
  
  
  
  // Feel free to uncomment out the code below to test your function!
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))
  // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
  