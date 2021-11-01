const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 6;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 9;
      break;
  }
}

//get total sleep that you actually slept for the week
const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');


//get ideal sleep calculation for the week
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7
}

//calculate sleep debt
const calculateSleepDept = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You had the perfect amount of sleep!")} else if (actualSleepHours > idealSleepHours) {
    console.log("You got " + (actualSleepHours - idealSleepHours) + " more hours of sleep than you needed!")} else {
    console.log("You need " + (idealSleepHours - actualSleepHours) + " more hours of sleep!")
  }
}

calculateSleepDept()