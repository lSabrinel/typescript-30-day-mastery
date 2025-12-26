// In the body of the recycle() function, write a type guard that checks if there is a .magnetize() method on the trash parameter.
// If there is, then return trash.magnetize(). Your type guard should appear above the trash.melt() call.

type Metal = {
  magnetize: () => string;
}

type Glass = {
  melt: () => string;
}

const iron = {
  magnetize: () => 'Electromagnet activated'
}

const bottle = {
  melt: () => 'Furnace set to 2,700 degrees'
}

function recycle(trash: Metal | Glass) {
  if ('magnetize' in trash) {

  return trash.magnetize();
  }
  return trash.melt();
}
console.log(recycle(iron));