// falsy values -> undefined, null, '', 0, false

let speed: number | null = null;

let ride = {
  // speed: speed || 10      // not suitable -> what happen if the speed is 0 and it is valid value for speed ???

  // speed: speed !== null ? speed : 10  // correct way, but lenthy

  // nullish coalescing operator
  speed: speed ?? 10, // shorter version of previous version
};

console.log(ride.speed); // 10
