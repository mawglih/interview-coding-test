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

// junior 
function userExist (arr, user) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === user) return true;
  }
  return false;
}

// mid senior 
function userExist2 (arr, user) {
  return arr.some(item => item.name === user);
}

console.log(userExist(users, 'Adam'));
console.log(userExist2(users, 'Alex'));
