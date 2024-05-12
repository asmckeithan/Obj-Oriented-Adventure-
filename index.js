


const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    },
  };
  adventurer.inventory.forEach((item) => {
    console.log(item);// this loop logs each item in Roins Invemtory
  });
  adventurer.companion.companion2 = {
    name: "Frank",
    type: "Flea",
    belongings: ["hat", "sunglasses"],
  };//above we added a companion2 
  console.log(adventurer);
  adventurer.roll();
console.log('Part 2')
  //we could find a sword at adventurer.inventory[0].
  //adding Character Class
  class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }//Adding Roll method to Character class
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
    
  }

  
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();//Calling the roll method for each character 
robin.companion.roll();
robin.companion.companion.roll();

console.log('Part 3')
class Adventurer extends Character {
  constructor (name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
    this.power = ""; //each character can have a special power 
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  setPower = (power) => {
    this.power = power;
  }
}
// Adventurer.scout();

class Companion{
  constructor(companion, type){
    this.companion = companion;
    this.type = type;
  }
}
  

console.log(robin.name)
console.log(robin.companion.name)