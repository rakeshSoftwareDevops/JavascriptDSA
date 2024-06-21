//create a function for time complexity
function addtonumber(num) {
    return num * (num + 1)/2;
}

var t1 = performance.now();
console.log(addtonumber(100000000000000000000000000000000000000));
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1)/100}seconds`)