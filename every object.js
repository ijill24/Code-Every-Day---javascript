// Write your code here:
const isVegan = (food) => {
    if(food.source === 'plant'){
        return true;
    }
    return false; 
}

const isTheDinnerVegan = (food) => {
  return food.every(isVegan);
}

// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false