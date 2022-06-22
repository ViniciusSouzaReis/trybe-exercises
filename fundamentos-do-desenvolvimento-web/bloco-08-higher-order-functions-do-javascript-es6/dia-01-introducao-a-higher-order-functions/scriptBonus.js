const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => {
  const dragonDmg = Math.floor(Math.random() * (50 - 15) + 1 + 15);
  return dragonDmg; 
}


const warriorDamage = (warrior) => {
  const warriorDmg = Math.floor(Math.random() * ((30 * 2) + 1 - 30) + 30);
  return warriorDmg;
}


const mageDamage = (mage) => {
  const mageMana = mage.mana;
  const turnStatus = {
    manaSpent: 0,
    damageGiven: 'Não possui mana suficiente'
  }
  if (mageMana > 15) {
    const calculateDamage = Math.floor(Math.random() * ((45 * 2) - 45) + 1 + 45);
    turnStatus.manaSpent = 15
    turnStatus.damageGiven = calculateDamage;
    return turnStatus;
  }
  return turnStatus;
};

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const warriorAttack = warriorDamage(warrior);
    warrior.damage = warriorAttack;
    dragon.healthPoints -= warriorAttack;
  },
  mageTurn: (mageDamage) => {
    const mageAttack = mageDamage(mage).damageGiven;
    mage.damage = mageAttack;
    dragon.healthPoints -= mageAttack;
    mage.mana -= mageDamage(mage).manaSpent;
  },
  dragonTurn: (dragonDamage) => {
    const dragonAttack = dragonDamage(dragon);
    mage.healthPoints -= dragonAttack;
    warrior.healthPoints -= dragonAttack;
    dragon.damage = dragonAttack;
  },
  turnResults: () => battleMembers,
};
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());