// Write your function here:
const finalGrade = (num1, num2, num3) => {
    if ((num1 > 100 || num1 < 0) || (num2 > 100 || num2 < 0) || (num3 > 100 || num3 < 0)) {
      return 'You have entered an invalid grade.';
    } 
    let average = (num1 + num2 + num3) / 3;
    if (average <= 59) {
      return 'F'
    }
    else if (average <= 69) {
      return 'D'
    }
    else if (average <= 79) {
      return 'C'
    }
    else if (average <= 89) {
      return 'B'
    } else {
      return 'A'
    } 
  }
  
  
    
  
  
  
  
  //Uncomment the line below when you're ready to try out your function
  console.log(finalGrade(90, 100, 92)) // Should print 'A'