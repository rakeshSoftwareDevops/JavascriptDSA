//Create a function to add up to some n numbers 
function addupto(n) {
    let sum = 0;
    for(let i = n; i > 0; i--) {
        sum = sum + i;
    }
    return sum;
}
var t1 = performance.now();
console.log(addupto(100000000));
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 100} seconds.`);