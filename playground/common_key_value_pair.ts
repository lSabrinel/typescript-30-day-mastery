//Let’s start by adding a type to the getFriendNameFromEvent()’s event parameter. 

type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
    displayName: string; // Added this property to fix the error.
};

function getFriendNameFromEvent(event: Like | Share) { // Added event's type.
  return event.displayName || event.username;
}

const newEvent = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss',
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);