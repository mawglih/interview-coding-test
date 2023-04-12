// array 
const users = [
    {
        name: 'Adam',
        age: 23,
        isActive: true,
    },
    {
        name: 'Suzie',
        age: 45,
        isActive: true,
    },
    {
        name: 'Jean-Paul Luis Nayal de Gofre',
        age: 19,
        isActive: false,
    },
];

// solution
// junior
// question 1

const namesJ = (arr) => {
  let answer = [];
  for(let i = 0; i < arr.length; i++) {
    answer.push(arr[i].name);
  }
  return answer;
};

// question 2
const namesJ2 = (arr) => {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].isActive) {
      answer.push(arr[i].name);
    }
  }
  return answer;
}

// question 3

const namesJ3 = (arr) => {
  // arr.sort((a,b) => b.age - a.age);
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].isActive) {
      answer.push(arr[i].name);
    }
  }
  console.log(answer)
  return answer;
}
// weak answer - input array is modified


// mid
// question 1

const namesM = (arr) => {
  let answer = [];
  arr.forEach(user => answer.push(user.name));
  return answer;
}

// question 2
const namesM2 = (arr) => {
  let answer = [];
  arr.filter(user => user.isActive).forEach(user => answer.push(user.name));
  return answer;
}

// question 3
const namesM3 = (arr) => {
  const newArr = [...arr];
  let answer = [];
  newArr.sort((a,b)=> b.age - a.age).filter(user => user.isActive).forEach(user => answer.push(user.name));
  return answer;
}

// senior
// question 1

const namesS = (arr) => arr.map(user => user.name);

// question 2 

const namesS2 = (arr) => arr.filter(user => user.isActive).map(user => user.name);

// question 3

const namesS3 = (arr) => {
  let newArr = [...arr];
  const answer = newArr
  .sort((a,b) => b.age - a.age)
  .filter(user => user.isActive)
  .map(user => user.name);
  return answer;
}
