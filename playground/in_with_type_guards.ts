// Write a type guard using in inside the move() function that checks if 'run' exists on pet. If it does, then return the value of pet.run().
//Write another type guard using the in operator inside the body of the move() function.
//  This type guard should check if the property 'swim' exists on pet. If it does, then return pet.swim()

type Cat = {
  name: string;
  run: () => string;
}

type Fish = {
  name: string;
  swim: () => string;
}

const siameseCat = { 
  name: 'Proxie', 
  run: () => 'pitter pat'
}

const bettaFish = { 
  name: 'Neptune', 
  swim: () => 'bubble blub'
}

function move(pet: Cat | Fish) {
    if ('run' in pet){
        return pet.run();
    }
    if ('swim' in pet){
        return pet.swim();
    }
}

console.log(move(siameseCat))