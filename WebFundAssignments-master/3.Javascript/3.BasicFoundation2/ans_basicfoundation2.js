[works!] #1: Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].


        function makeItBig(array) {

            for (var i=0; i < array.length+1; i++) {
                if (array[i] >0) {
                    array[i] = "big";
                }
            }
            return array;
        }
        makeItBig([-1,3,5,-5]);


----->

[works!] #2: Print Low, Return High - Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

        function lowHigh(array) {
            var min = array[0];
            var max = array[0];
            
            for (var i = 1; i< array.length; i++) {
        
                if (array[i] < min) {
                    min = array[i];   
                } else if (array[i]> max){
                    max = array[i];
                }
            }
            console.log(min);
            return max;    
        }

        console.log(lowHigh([3,-5,1]));


----->

   
[works] #3: Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.


        function printOneReturnAnother (array) {
            console.log (array[array.length-2])

            for (var i =0; i < array.length; i++) {
                if(array[i] %2 ==1) {
                    return array[i];
                }
            }
        }
        printOneReturnAnother ([2,-9,8,7]);

---->

[maybe] #4: Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.

        function double(arr) {
            var arrNew = [];

            for (var i=0; i <arr.length; i++) {
                arrNew.push([arr[i]*2]);
            }
            return arrNew;
        }
        double([1,2,3]);

-------->


[done] #5: Count Positives - Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
    function countPositives(arr) {
        var count = 0;
        for(var i=0; i < arr.length; i++) {
            if (arr[i] > 0) {
                count = count +1;
            }
        }
        arr.pop();
        arr.push(count);
        return arr;
    }
    countPositives([-1,1,1,1]);


------>


[done] #6: Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"

function evenOdd(arr) {
   for (var i=0; i <arr.length ; i++) {
       if(arr[i] %2 ==0) {
           if(arr[i+1]%2==0) {
                if(arr[i+2]%2==0) {
                    console.log("even");
                    break;
                }
           }
       } else  {
           if(arr[i+1]%2 !=0) {
               if(arr[i+2] %2 !=0) {
                   console.log ("odd");
                   break;
               }
           }
       }
   }
}
evenOdd([0,2,4,5,6,7,9]); //even
evenOdd([0,1,3,5,6,7,9]); //odd
// Learnng point:
// - the number can be odd or even so you do not have to have extra conditions
// - You can put the break statement after the console.log


----->

[done] #7: Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.

function incrementTheSeconds (arr) {
    for(var i=0; i <arr.length; i++) {
        if (i % 2 !=0) {
            arr[i] = arr[i] +1;
            console.log (arr[i]);
        }
    }
    return arr; 
}

incrementTheSeconds([10,16,20, 25])


----->
[done] #8: Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].

 
function previousLengths (arr) {

    for (var i = arr.length-1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }
    return arr;
}
previousLengths(["hello", "dojo", "awesome"]);


----->


#9: Add Seven to Most - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.



----->
[done] #10: Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverse(array) {
    var tmp = 0; 
    var length = array.length
    for (var i=0; i <= length; i++) {
        tmp = array[i];
        array[i] = array[length-i];
        array[length-i] = tmp;
    }
    return array;
}
reverse([3,1,6,4,2]);


Note 
I get an undefined at the end of the loop. 

------>
#11: Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].



----->
#12: Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.



------->
#13: Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].




------->
#14: Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].







