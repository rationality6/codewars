function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() {
    return this.name;
  }
}

var lew = new Fighter("Lew", 10, 2)
var harry = new Fighter("Harry", 5, 4)


function declareWinner(fighter1, fighter2, firstAttacker) {
  var winner = ""
  if (firstAttacker === fighter1.name) {
    while (true) {
      fighter2.health -= fighter1.damagePerAttack
      if (fighter2.health <= 0) {
        winner = fighter1.name
        break;
      }
      fighter1.health -= fighter2.damagePerAttack
      if (fighter1.health <= 0) {
        winner = fighter2.name
        break;
      }
    }
  } else {
    while (true) {
      fighter1.health -= fighter2.damagePerAttack
      if (fighter1.health <= 0) {
        winner = fighter2.name
        break;
      }
      fighter2.health -= fighter1.damagePerAttack
      if (fighter2.health <= 0) {
        winner = fighter1.name
        break;
      }
    }
  }
  return winner
}

// console.log(declareWinner(lew, harry, 'Lew'));


// If you don't need to print log.


function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
  var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
  if (fac1 < fac2) {
    return fighter2.name;
  } else if (fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

console.log(declareWinner(lew, harry, 'Lew'));
