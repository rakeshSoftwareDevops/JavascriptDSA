//redefined the memo variable in the parameter itself for the default values
function fib_memo(n, memo=[undefined,1,1]) {
    if(memo[n] !== undefined) return memo[n];
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

//use table version of fibannoci version because of maximum stack can be reached error due to its recursion for worst case scenario
function fib_table(n) {
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}


