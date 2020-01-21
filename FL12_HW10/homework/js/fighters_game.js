function Fighter(fighterObj) {
  fighterObj.health = fighterObj.hp;
  fighterObj.Wins = 0;
  fighterObj.Losses = 0;

  this.getName = function getName() {
    return fighterObj.name;
  };
  this.getDamage = function getDamage() {
    return fighterObj.damage;
  };
  this.getHealth = function getHealth() {
    return fighterObj.health;
  };
  this.getStrength = function getStrength() {
    return fighterObj.strength;
  };
  this.getAgility = function getAgility() {
    return fighterObj.agility;
  };
  
  this.attack = function attack(defender) {
    const highestChance = 100;
    let chanceOfSuccess =
      highestChance - (defender.getAgility() + defender.getStrength());
    console.log(chanceOfSuccess);
    let randomPerc = Math.floor(Math.random() * highestChance);
    console.log(randomPerc);
    if (randomPerc < chanceOfSuccess) {
      defender.dealDamage(this.getDamage());
      console.log(
        fighterObj.name +
          ' makes ' +
          fighterObj.damage +
          ' damage to ' +
          defender.getName()
      );
    } else {
      console.log(fighterObj.name + ' attack missed');
    }
  };
  this.logCombatHistory = function logCombatHistory() {
    console.log(
      'Name:' +
        fighterObj.name +
        ', Wins:' +
        fighterObj.Wins +
        ', Losses:' +
        fighterObj.loses
    );
  };
  this.heal = function heal(amountOfHealth) {
    fighterObj.health = Math.min(0, fighterObj.health - amountOfHealth);
  };
  this.dealDamage = function dealDamage(amountDamage) {
    fighterObj.health = Math.max(0, fighterObj.health - amountDamage);
  };
  this.addWin = function addWin() {
    fighterObj.Wins++;
  };
  this.addLoss = function addLoss() {
    fighterObj.Losses++;
  };
}
function battle(...fightersObj) {
  for (let fighter of fightersObj) {
    if (!fighter.getHealth()) {
      console.log(fighter.getName() + ' is dead and can\'t fight');
      return;
    }
  }
  let readyFighter = 0;
  while (fightersObj[readyFighter].getHealth()) {
    fightersObj[readyFighter].attack(fightersObj[1 - readyFighter]);
    readyFighter = 1 - readyFighter;
  }
  console.log(fightersObj[1 - readyFighter].getName() + ' has won!');
  fightersObj[1 - readyFighter].addWin();
  fightersObj[readyFighter].addLoss();
}

const first_Fighter = new Fighter({
  name: 'Spartacus',
  strength: 25,
  damage: 25,
  hp: 100,
  agility: 30
});
const second_Fighter = new Fighter({
  name: 'Crixus',
  strength: 30,
  damage: 30,
  hp: 110,
  agility: 20
});

battle(first_Fighter, second_Fighter);

