function countUniqueValues(inputarr){
  // add whatever parameters you deem necessary - good luck!
  let count = 1;
  if(inputarr.length == 0) return 0;
  let startElement = inputarr[0];
  for(let i = 0;i < inputarr.length;i++) {
      if(startElement !== inputarr[i]) {
          count = count + 1;
          startElement = inputarr[i];
      }
  }
  return count;
  
}

countUniqueValues([1,1,1,1,1,2,3,3,5])
