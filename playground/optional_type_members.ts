/* Declare an interface at the top of the file named UserNameOptions. It should have three type members:

firstName: an optional string.
lastName: an optional string.
username: a required string.

Apply the UserNameOptions type you created in the last step to the getUserName() function’s options parameter
*/

interface UserNameOptions {
  firstName?: string;
  lastName?: string;
  username: string;
}

function getUserName(options: UserNameOptions) {
  if (options.firstName && options.lastName) {
    return console.log(`${options.firstName} ${options.lastName}`);
  }

  return console.log(options.username);
}

getUserName({
  firstName: 'Mr.',
  lastName: 'Oshiro',
  username: 'hotelowner304'
})

getUserName({
  firstName: 'Madeline',
  username: 'mountainClimber'
})