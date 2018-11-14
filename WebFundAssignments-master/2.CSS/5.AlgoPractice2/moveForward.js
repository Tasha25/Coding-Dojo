// 2. Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].

Answer #2
function moveForward(number){
// your code here
  for(var i=0; i<number.length; i++){
    if (number[i] != 0) {
      //replace number i with number i+1
      while (i != (number.length-1)) {
        number[i] = number[i+1]
        i++;
      }

      if (i == (number.length-1)){
          number[number.length-1] = 0;
        }
    }
  return number;
 }
}
moveForward([1,2,3])  //should return [2,3,0].


// Answer #1
function moveForward(number){
// your code here
  for(var i=0; i<number.length; i++){
    if (number[i] != 0) {
      number[i+0] = number[i+1];
      number[i+1] = number[i+2];
      number[i+2] = 0;
    }
  return number;
 }
}
moveForward([1,2,3])  //should return [2,3,0].
