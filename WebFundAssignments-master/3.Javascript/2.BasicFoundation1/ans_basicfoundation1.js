#1 Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function number() {
    var array = [];
    for (var i=1; i<=255; i++) {
        array.push(i);
    }
    return array;
}

number();

--------------->

#2 Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function sum_even() {
    var sum = 0;

    for (var i=0; i<=1000; i++) {
        if (i%2 == 0) {
            sum = sum+i;
        }
    }
    return sum;
}

sum_even();

-------------->

#3 Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function sum_odd() {
    var sum = 0;

    for (var i=0; i<=5000; i++) {
        if (i%2 == 1) {
            sum = sum+i;
        }
    }
    return sum;
}

sum_odd();

------------->

#4 Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function sum_array(numbers) {
    var sum = 0;

    for (var i=0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}

sum_array([1,2,3]);


--------------->

#5 Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7

function max_number(numbers) {
    var max = numbers[0];

    for (var i=1; i < numbers.length; i++) {
        if (numbers[i]>max) {
            max = numbers[i];
        }
    }
    return max;
}

max_number([1,2,3]);

---------------->
#6 Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)


function average(array) {
    var sum = 0, avg =0;
  for (var index=0; index< array.length; index++) {
    sum = sum+array[index];
  }
    avg = sum/array.length
    return avg;
}

average([1,3,5,6,21])
------------------->
#7 Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function odd() {
    var array = [];
  for (var index=0; index< 50; index++) {
    if (index%2 !=0) {
      array.push(index);
    }
  }
    return array;
}

odd();
------------------->

#8 Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(arr,Y) {
    var arrayNew = [];
  for (var index=0; index< arr.length; index++) {
    if (arr[index]>Y) {
      arrayNew.push(arr[index]);
    }
  }
    return arrayNew;
}

greaterThanY([1,3,5,7],3);
------------------->

#9 Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function square(arr) {
  for (var index=0; index< arr.length; index++) {
    arr[index] = arr[index]*arr[index];
  }
    return arr;
}

square([1,5,10,-2]);

------------------->
#10 Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function noNegative(arr) {
  for (var index=0; index< arr.length; index++) {
    if (arr[index]<0) {
    arr[index] = 0;
   }
  }
    return arr;
}

noNegative([1,5,10,-2]);


------------------->
#11 Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(arr) {
  var arrNew =[];
  var max = arr[0];
  var min = arr[0];
  var avg = 0;
  var sum = 0;

  for (var index=1; index< arr.length; index++) {
    if ( arr[index] > max) {
      max = arr[index];
    }

    else if (arr[index]< min ) {
      min =arr[index];
    }
    sum = sum+arr[index];
   }
     avg = sum/arr.length;

    arrNew.push(max);
    arrNew.push(min);
    arrNew.push(avg);
    return arrNew;
}

maxMinAvg([1,5,10,-2]);


#12 Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).


function swapValues(array) {
    var tmp = 0;
    var length = array.length;
    tmp = array[0];
    array[0] = array[length-1];
    array[length-1] = tmp;
    return array;

}
swapValues([1,5,10,-2]);

------------------->
#13 Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].


function negativeDojo(arr) {
  for (var index=0; index< arr.length; index++) {
    if (arr[index]<0) {
    arr[index] = "Dojo";
   }
  }
    return arr;
}

negativeDojo([-1,-3,2]);
