function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');
  return parseInt(reversed) * Math.sign(n);
}
console.log(reverseInt(15));
console.log(reverseInt(134565));
console.log(reverseInt(-150));
console.log(reverseInt(1892));

