// 4.	Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
// At this point, it's CRITICAL that you can complete all the 13 challenges 


Answer #2 

function repeatTwice(array, num) {
    
    arrayTwice = [];

    for (var i=0; i < array.length; i++) {
        var j =1;
        while (j <= num) {
            arrayTwice.push(array[i]);
            j++;
        }
    }
    return arrayTwice;
}

repeatTwice([4, "Ulysses", 42, false], 2);






Answer #1

//create a new array
// a[i] will be pushed twice into the new array
// a[i+1] will be pushed twice into the new array
// a[array.length]


function repeatTwice(array) {
    
    arrayTwice = [];

    for (var i=0; i < array.length; i++) {
        arrayTwice.push(array[i]);
        arrayTwice.push(array[i]);
    }
    return arrayTwice;
}

repeatTwice([4, "Ulysses", 42, false]);


