let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ')
console.log(`There are ${storyWords.length} words.`)
// console.log(storyWords)
let betterWords = storyWords.filter(word => {
  if (word !== unnecessaryWords) {
    return word}
  }
);

//count overused words
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

let count = storyWords.forEach(element => {
    if (element === 'really') {
      return reallyCount ++;
    } else if (element == 'very') {
      return veryCount ++;
    } else if (element == 'basically') {
      return basicallyCount ++;
    }
});
console.log(`really # : ${reallyCount}`);
console.log(`very # : ${veryCount}`);
console.log(`basically # : ${basicallyCount}`);

//count how many sentences
let punc = 0
storyWords.forEach(element => {
  if (element[element.length-1] === '.') {
    return punc ++;
  } else if (element[element.length-1] === '!') {
    return punc ++;
  }
});
console.log(`There are ${punc} sentences.`)

//return as a one string
let final = betterWords.join(" ");
console.log(final)


// Ideas for future practice: 

// For the overused words, remove it every other time it appears.

// Write a function that finds the word that appears the greatest number of times.

// Replaced overused words with something else.