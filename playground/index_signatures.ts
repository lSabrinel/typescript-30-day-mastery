import { getBudgetAsync } from './api';

//Declare an interface named Budget. 
// Use an index signature to make all of its type members have property names of a variable category typed 
// as a string with each key’s value typed as a number.
// Apply the Budget interface to the result variable inside the getBudget() function.

interface Budget {
  [category: string]: number;
}

async function getBudget() {
  const result: Budget = await getBudgetAsync();
  console.log(result);
}

getBudget();