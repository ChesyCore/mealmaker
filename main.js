var menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
   
      let dishes = this._courses[courseName]
      let index = Math.floor(Math.random() * dishes.length)
      return dishes[index]
    },
generateRandomMeal() {
  let appetizer = this.getRandomDishFromCourse('appetizers')
  let main = this.getRandomDishFromCourse('mains')
  let dessert = this.getRandomDishFromCourse('desserts')

  let totalPrice = appetizer.price + main.price + dessert.price

  return `Total bill is ${totalPrice} for appetizer, ${appetizer.name}, main, ${main.name},dessert, ${dessert.name}.`
},
}
menu.addDishToCourse('appetizers', 'salmon bites', 8)
menu.addDishToCourse('appetizers', 'tuna tartar', 10)
menu.addDishToCourse('appetizers', 'brie & honey', 6)
menu.addDishToCourse('mains', 'gochujang chicken', 12)
menu.addDishToCourse('mains', 'miso cod', 14)
menu.addDishToCourse('mains', 'smoked porkbelly', 15)

menu.addDishToCourse('desserts', 'matcha crepe cake', 6)
menu.addDishToCourse('desserts', 'boba toast', 5)
menu.addDishToCourse('desserts', 'mango slush', 9)


let meal = menu.generateRandomMeal();
console.log(meal)
 
