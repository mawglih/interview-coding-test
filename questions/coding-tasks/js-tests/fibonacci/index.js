// junior
function fibJun(n) {
    const result = [0, 1];
    for(let i = 2; i <= n; i++) {
        result.push(result[i-1] + result[i-2]);
    }
    return result[n];
}

// better answer, but slow O(n!)

function fibSlow(n) {
    if (n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

// best answer
function slowFib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}
const fib = memoize(slowFib);