function maxChar(str) {
    let charMap = {};
    for(let char of str) {
        charMap[char] ? charMap[char]++ : charMap[char] = 1
    }
    let maxKey = 0;
    let found = ''
    for(let char in charMap) {
        if(charMap[char] > maxKey) {
            maxKey =  charMap[char];
            found = char;
        }
    }
    return found;
}