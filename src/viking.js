// Soldier
class Soldier {
constructor(health, strength){
    this.health = health;
    this.strength = strength;
    }    
    attack = () => {
        return this.strength;
    }
    receiveDamage = (damage) => {
        this.health -= damage;
    }    
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }   
    receiveDamage = (damage) => {       
        this.health -= damage;
        if(this.health > 0){            
            return `${this.name} has received ${damage} points of damage`
        } else if (this.health <= 0){
            return `${this.name} has died in act of combat`            
        }   
    }
    battleCry = () => {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{

receiveDamage = (damage) => {
    this.health -= damage;
    if(this.health > 0){        
        return `A Saxon has received ${damage} points of damage`
    } else if (this.health <= 0){
        return `A Saxon has died in combat`  
    }  
}
}

// War
class War {
constructor() {
    this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking = (Viking) => {
        this.vikingArmy.push(Viking)
    }

    addSaxon  = (Saxon) => {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack = () => {

        let attacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        let defender = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        let message = defender.receiveDamage(attacker.attack())
        if(defender.health <= 0){
            this.saxonArmy.splice(defender)
        }
    }

    saxonAttack = () => {

        let attacker = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        let defender = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        let message = defender.receiveDamage(attacker.attack())
        if(defender.health <= 0){
            this.vikingArmy.splice(defender)
        }
        
    }

    showStatus = () => {
        
    }

  

}


let jim = new Viking('jim, 100, 50')  
  let slim = new Viking('jim, 100, 50')
  let tim = new Viking('jim, 100, 50')  
  let sim = new Viking('jim, 100, 50')
  let kim = new Viking('jim, 100, 50')  
  let pim = new Viking('jim, 100, 50')
  let jimbo = new Saxon(100,50)
  let timba = new Saxon(100,50)
  let himbo = new Saxon(100,50)
  let rimbo = new Saxon(100,50)
  let wimbo = new Saxon(100,50)
  let qimbo = new Saxon(100,50)


WW3.addViking([jim,slim,tim,sim,kim,pim])
WW3.addSaxon([jimbo,timba,himbo,rimbo,wimbo,qimbo])
