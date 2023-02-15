class AttackSkill {
  constructor(attackName, damageAmount, magicAmount) {
    this.attackName = attackName;
    this.damageAmount = damageAmount;
    this.magicAmount = magicAmount;
  }
}

let lightning = new AttackSkill("lightning", 300, 30);
let poisonSeed = new AttackSkill("poison seed", 4, 25);


class Pokemon extends AttackSkill {
  constructor(
    pokemonName,
    health,
    magic,
    attackName,
    damageAmount,
    magicAmount
  ) {
    super(attackName, damageAmount, magicAmount);
    this.pokemonName = pokemonName;
    this.health = health;
    this.magic = magic;
    this.skills = [this.attackName, this.damageAmount, this.magicAmount];
  }

  learnAttackSkill(arg) {
    console.log(
      `${this.pokemonName} learned skill ${arg.attackName} successfully!`
    );
  }

  showStatus() {
    console.log(
      `${this.pokemonName} status: health: ${this.health}, magic: ${this.magic} `
    );
  }

  getMagic(num) {
    this.magic += num;
    console.log(
      `${this.pokemonName} got ${num} magic back and now he has ${this.magic} magic`
    );
  }

  attack(attackIndex, anotherPok) {
 if (anotherPok.health <= 0){
  console.log(` ${anotherPok.pokemonName} is dead`)  //Pokemon is alive?
 } else{


  
    
    // 1 pikachu to bulbasaur lightning

    if (attackIndex === 0 && anotherPok === bulbasaur) {      
      if (anotherPok.magic >= lightning.magicAmount) {                //Pikachu has enough magic ?
        console.log(
          `---> ${this.pokemonName} attacks!!!.               
       => now ${
         anotherPok.pokemonName
       } health: ${(anotherPok.health -=
            lightning.damageAmount)}
            ; magic: ${(anotherPok.magic -=
            lightning.magicAmount)}`
        );
      } else
        console.log(
          ` *** ${this.pokemonName} has not enough magic for lightning attack***`
        );

      // bulbasaur to pikachu lightning
    } else if (attackIndex === 0 && anotherPok === pikachu) { 
      if (anotherPok.magic >= lightning.magicAmount) {                 //Bulbasaur has enough magic?
        console.log(
          `!!! ${this.pokemonName} attacks!!!. 
        ${anotherPok.pokemonName} health: ${(anotherPok.health -=
            lightning.damageAmount)}; magic: ${(anotherPok.magic -=
            lightning.magicAmount)}`
        );
      } else
        console.log(
          ` *** ${this.pokemonName} has not enough magic for lightning attack***`
        );

      // pikachu to bulbasaur poisoned Seed                         
    } else if (attackIndex === 1 && anotherPok === bulbasaur) {
      if (anotherPok.magic >= poisonSeed.magicAmount) {                //Pikachu has enough magic?
        console.log(
          `---> ${this.pokemonName} attacks!!!. 
        ${anotherPok.pokemonName} health: ${(anotherPok.health -=
            poisonSeed.damageAmount)}; magic: ${(anotherPok.magic -=
            poisonSeed.magicAmount)}`
        );
      } else
        console.log(
          ` *** ${this.pokemonName} has not enough magic for poison Seed attack***`
        );

      // bulbasaur to pikachu poisinedSeed                           
    } else if (attackIndex === 1 && anotherPok === pikachu) {
      if (anotherPok.magic >= poisonSeed.magicAmount) {          //Bulbasaur has enough magic?
        console.log(
          `!!! ${this.pokemonName} attacks!!!. 
         ${anotherPok.pokemonName} health: ${(anotherPok.health -=
            poisonSeed.damageAmount)}; magic: ${(anotherPok.magic -=
            poisonSeed.magicAmount)}`
        );
      } else
        console.log(
          ` *** ${this.pokemonName} has not enough magic for poison Seed attack***`
        );
    }
  }
}
}

let pikachu = new Pokemon("pikachu", 100, 400);
let bulbasaur = new Pokemon("bulbasaur", 100, 600);

pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(poisonSeed);

pikachu.showStatus();
pikachu.getMagic(25);

bulbasaur.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);

bulbasaur.showStatus();
bulbasaur.getMagic(25);

console.log(`+++++++++++++++++++++++++++++`);

pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.attack(1, bulbasaur);
bulbasaur.attack(1, pikachu);




