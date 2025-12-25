/* Exercice lines.
let codecademyCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: [number, number, string, number, number, string] = [25, 0 , 'N' , 71, 0, 'W'];
*/

//First, create the type alias Coord to stand for the coordinate tuple type. It should be of the same type as codecademyCoordinates and bermudaTCoordinates.

type Coord = [number, number, string, number, number, string];  // I need to focus more on types (got the answer wrong).
// let Coord = codecademyCoordinates = bermudaTCoordinates;

// Now, replace the old, long type annotations for codecademyCoordinates and bermudaTCoordinates with annotations that use your new type alias.

let codecademyCoordinates : Coord = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates : Coord = [25, 0 , 'N' , 71, 0, 'W'];