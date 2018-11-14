// 2.	Given an array, print the max, min and average values for that array.



function arrayMaxMinAvg(array) {

var max = array[0]; 
var min = array[0]; 
var avg = 0;
var sum =0;

    for (var i = 0; i < array.length; i++) {
        if (array[i]> max) {
            max = array[i];
        }

        if (array[i] < min) {
            min = array[i];
        }
        
        sum = sum+array[i];
        avg = (sum)/ array.length; //is it okay to go here?  
    }
   console.log(max);
   console.log(min);
   console.log(avg);
}


arrayMaxMinAvg([3,4,5]);