function maxsubarray(inputarr,num) {
    if(num > inputarr.length || num == 0 || inputarr.length <= 0) return;
    let maxvalue = inputarr[0];
    for(let i=0; i < inputarr.length; i++) {
        let currentsum = inputarr[i];
        let currentcount = 1;
        for(let j=i+1; currentcount <= num-1; j++) {
           currentsum = currentsum + inputarr[j];
           currentcount++
        }
        if(currentsum > maxvalue) {
            maxvalue = currentsum;
        }
    }
    return maxvalue;  
}

maxsubarray([1,2,5,2,8,1,5],2)
maxsubarray([1,2,5,2,8,1,5],3)