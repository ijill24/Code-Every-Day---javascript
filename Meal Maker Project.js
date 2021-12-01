//define object with empty arrays
const menu = {
    _courses: {
      _appetizers: [],
      _mains: [],
      _desserts: [],

      //Getters and setters for each course
      get appetizers() {
        return this._appetizers;
      },
      set appetizers(appetizersIn) {
        this._appetizers = appetizersIn;
      },
      get mains() {
        return this._mains;
      },
      set mains(mainsIn) {
        this._mains = mainsIn;
      },
      get desserts() {
        return this._desserts;
      },
      set desserts(dessertsIn) {
        this._desserts = dessertsIn;
      },
    },
    
    //get the items in the arrays
    get courses() {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts,
      };
  },
    
    //function to fill the arrays with dish name and price
    
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      
      this._courses[courseName].push(dish);
    },
    
    //get random number to select the index for each course
    getRandomDishFromCourse (courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    
    //put together a random meal using the previous call
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      
      //report the meal
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
    },
  };
  
  menu.addDishToCourse('appetizers', 'Minestrone Soup', 3.25);
  menu.addDishToCourse('appetizers', 'Pretzel and Cheese', 5.25);
  menu.addDishToCourse('appetizers', 'Onion Straws', 4.75);
  
  menu.addDishToCourse('mains', 'Tofu Tacos', 8.50);
  menu.addDishToCourse('mains', 'Ham and Potatoes', 12.95);
  menu.addDishToCourse('mains', 'Meatloaf', 10.00);
  
  menu.addDishToCourse('desserts', 'Blueberry Pie', 4.75);
  menu.addDishToCourse('desserts', 'Chocolate Chip Cookies', 2.75);
  menu.addDishToCourse('desserts', 'Ice Cream Cone', 4.00);
  
  let meal = menu.generateRandomMeal();
  
  console.log(meal);