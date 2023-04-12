const numbers = [1,4,7,3,10,13];

// junior solution
const findSum1 = (arr, target) => {
  for(let p1 = 0; p1 < arr.length; p1++) {
    const goal = target - arr[p1];
    for( let p2 = p1 + 1; p2 < arr.length; p2++) {
      if(goal === arr[p2]) {
        return [p1, p2];
      };
    };
  };
  return -1;
};



console.log(findSum1(numbers, 20)); 
// answer [2,5]
console.log(findSum1(numbers, 18));
// answer -1


// mid/senior solution
const findSum2 = (arr, target) => {
  const numsMap = {};
  for (let i = 0; i < arr.length; i++) {
    const currentVal = numsMap[arr[i]];
    if(currentVal >= 0) {
      return [currentVal, i];
    } else {
      const goal = target - arr[i];
      numsMap[goal] = i;
    };
  };
  return -1;
};

console.log(findSum2(numbers, 20)); 
// answer [2,5]
console.log(findSum2(numbers, 18));
// answer -1