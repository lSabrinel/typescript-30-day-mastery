// In the body of the prepareEntree() function, write a type guard using the in operator. Check if the 'boil' property exists on the entree variable.
// If it does, then return the value of entree.boil(), since that entree must be of type Pasta.
// Instead of writing another separate type guard, add an else statement to the if conditional you wrote in the last step. 
// Inside the else block, return the result of entree.panFry().

type Pasta = {
  menuName: string;
  boil: () => string;
}

type Meat = {
  menuName: string;
  panFry: () => string;
}

const fettuccine = {
  menuName: 'Fettuccine',
  boil: () => 'Heat water to 212 degrees',
}

const steak = {
  menuName: 'New York Strip Steak',
  panFry: () => 'Heat oil to 350 degrees',
}

function prepareEntree(entree: Pasta | Meat) {
    if ( 'boil' in entree ){
        return entree.boil();}
    else{
        return entree.panFry();
    }
}

console.log(prepareEntree(fettuccine));