// this is part 2 of the assignment. Copy/paste the starter code from the platform like seen below
//and edit the code to make it work.
#1
function printUpTo(x) {
    if (x < 0) {
        return false;
    }

    for (var i = 0; i < x; i++) {
        console.log(i);
    }
}

printUpTo(1000000); // should print all the integers from 1 to 1000000
y = printUpTo(-10); // should return false
console.log(y); // should print false


// #2
function printSum(x) {
    var sum = 0;
    for (var i = 0; i <= x; i++) {
        sum += i;
        console.log("When we have the number " + i + " the sum so far is " + sum);

    }
    return sum;
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640


#3
function printSumArray(x){ 
var sum = 0; 
for(var i=0; i<x.length; i++) { 
  sum += x[i];
//your code here 
}
return sum; 
}
 

console.log( printSumArray([1,2,3]) ); // should log 6



#4
/*
Create a function that returns the largest element in a given array.  For example largestElement( [1,30,5,7] ) should return 30.
*/

function largestElement(x) {
    var max = x[0];

    for (var i = 1; i < x.length; i++) {
        if (x[i] > max) {
            max = x[i];
        }

    }
    return max;
}


