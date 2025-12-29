interface Developer extends Human {
  code: () => void;
}

// Declare an interface named Human, and give it two type members: name typed as a string and hobbies typed as string[].
// Add the members from Human to the Developer interface using the extends keyword.

interface Human {
  name: string;
  hobbies: string[];
}


const me: Developer = { 
  code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
  name: 'Corrina', 
  hobbies: ['Building rockets']
}

me.code();