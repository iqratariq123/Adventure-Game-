import inquirer from "inquirer"

class player1{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}

class Oppenent1{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

let player = await inquirer.prompt(
    [
        {
            name: "name",
            type: "input",
            message: "please Enter your Name: "
        }
    ]
)

let Oppenent = await inquirer.prompt(
    [
        {
            name: "select",
            type: "list",
            message: "select your Oppenent",
            choices: ["Skeleton", "Alien", "Zombie"]
        }
    ]
)

let p1 = new player1(player.name)
let p2 = new Oppenent1(Oppenent.name)

 // Skeleton
do{
    if (Oppenent.Select == "Skeleton") {
        let ask = await inquirer.prompt(
            [
                {
                    name: "opt",
                    type: "list",
                    message: "what would you like to do?",
                    choices: ["Attack", "Dring portion", "Run For your Life.."],
                }
            ]
        );
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${p2.name} fuel is ${p2.fuel}`);
                if(p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit()
                }
            }
            if(num <= 0) {
                p2.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${p2.name} fuel is ${p2.fuel}`);
                if(p2.fuel <= 0) {
                    console.log("You Win");
                   process.exit()
            };
        }
        if(ask.opt == "Dring portion"){
            p1.fuelIncrease()
            console.log(`You Drink Health portion Your fuel is ${p1.fuel}`);
        }
        if(ask.opt == "Run For Your Life.."){
            console.log("You Loose, Better Luck Next Time");
            process.exit()

        }
        }
    } 

    //Alien

    if (Oppenent.Select == "Alien") {
        let ask = await inquirer.prompt(
            [
                {
                    name: "opt",
                    type: "list",
                    message: "what would you like to do?",
                    choices: ["Attack", "Dring portion", "Run For your Life.."],
                }
            ]
        );
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${p2.name} fuel is ${p2.fuel}`);
                if(p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit()
                }
            }
            if(num <= 0) {
                p2.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${p2.name} fuel is ${p2.fuel}`);
                if(p2.fuel <= 0) {
                    console.log("You Win");
                   process.exit()
            };
        }
        if(ask.opt == "Dring portion"){
            p1.fuelIncrease()
            console.log(`You Drink Health portion Your fuel is ${p1.fuel}`);
        }
        if(ask.opt == "Run For Your Life.."){
            console.log("You Loose, Better Luck Next Time");
            process.exit()

        }
        }
    }

    //Zombie
    
    if (Oppenent.Select == "Zombie") {
        let ask = await inquirer.prompt(
            [
                {
                    name: "opt",
                    type: "list",
                    message: "what would you like to do?",
                    choices: ["Attack", "Dring portion", "Run For your Life.."],
                }
            ]
        );
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${p2.name} fuel is ${p2.fuel}`);
                if(p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit()
                }
            }
            if(num <= 0) {
                p2.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${p2.name} fuel is ${p2.fuel}`);
                if(p2.fuel <= 0) {
                    console.log("You Win");
                   process.exit()
            };
        }
        if(ask.opt == "Dring portion"){
            p1.fuelIncrease()
            console.log(`You Drink Health portion Your fuel is ${p1.fuel}`);
        }
        if(ask.opt == "Run For Your Life.."){
            console.log("You Loose, Better Luck Next Time");
            process.exit()

        }
        }
    }

}

while(true);