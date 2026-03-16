// Have a go at refactoring this to use classes
// There are a lot of redundant lines from repeating properties across two objects

let player = {
  icon: "🤓",
  health: 200,
  isDead: false,
  maxAttackDMG: 180,
  attack: function (target) {
    let dicerollDMG = getAttackDMG(player.maxAttackDMG);
    target.health = target.health - dicerollDMG;
    console.log(
      `The player ${player.icon} attacks! Slicing forward, they deal ${dicerollDMG} damage. ${target.name} now has ${target.health} hit-points. `,
    );
  },
};

function getAttackDMG(number) {
  return Math.floor(Math.random() * number);
}

let vampire = {
  name: "Vampire",
  health: 250,
  isDead: false,
  maxAttackDMG: 100,
  attack: function (target) {
    let diceroll = getAttackDMG(this.maxAttackDMG);
    target.health = target.health - diceroll;
    console.log(
      `The vampire bares its fangs! Lashing out, they deal ${diceroll} damange. ${target.icon} now has ${target.health} hit-points!`,
    );
  },
};

function playGame() {
  let turns = [1, 2, 3, 4, 5];
  for (let i = 0; i < turns.length; i++) {
    player.attack(vampire);
    if (vampire.health <= 0) {
      console.log("The vampire died!");
      break;
    }
    vampire.attack(player);
    if (player.health <= 0) {
      console.log("The player died!");
      break;
    }
  }
}

playGame();
