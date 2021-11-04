//exercise 1 Can I Vote?
const canIVote = age => {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }

console.log(canIVote(20)) // Should print true

//exercise 2 Agree or Disagree
const agreeOrDisagree = (string1, string2) => {
  if (string1 === string2) {
    return 'You agree!';
  } else {
    return 'You disagree!';
  }
}

console.log(agreeOrDisagree("yep", "yep")) 
// Should print 'You agree!'

