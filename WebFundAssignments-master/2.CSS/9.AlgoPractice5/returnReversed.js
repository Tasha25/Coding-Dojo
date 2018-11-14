// 3.	Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].



function returnReversed(array) {
var reversedArray = [];
var x = array.length-1   
    for (var i=x; i >=0 ; i--) {
     reversedArray.push(array[i]);
    }
    return reversedArray;
}

returnReversed([1,2,3]);