const howOld = (age, year) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const yearDifference = year - currentYear
    const newAge = age + yearDifference
    if (newAge < 0) {
      return `The year ${year} was ${-newAge} years before you were born`;
    } else if (newAge > age) {
      return `You will be ${newAge} in the year ${year}`
     } else {
      return `You were ${newAge} in the year ${year}`
       }  
    }
  
  
  
  console.log(howOld(125, 2010))