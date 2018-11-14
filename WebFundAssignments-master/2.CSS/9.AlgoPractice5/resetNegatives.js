// 1.	Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0]


function resetNegatives(value){
// your code here
  for (var i=0; i<value.length; i++){
	if (value[i] < 0) {
	value[i] = 0;
	}
 }
   return value;
}
resetNegatives( [1,2,-1, -3])
