const bobsFollowers = ['James', 'Liza', 'Matt', 'Kirk'];
const tinasFollowers = ['Grant', 'Liza', 'James'];
mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}
console.log(mutualFollowers)