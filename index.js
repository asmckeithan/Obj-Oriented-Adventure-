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

  //we could find a sword at adventurer.inventory[0].