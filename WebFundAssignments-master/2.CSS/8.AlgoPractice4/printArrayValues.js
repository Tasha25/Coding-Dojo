1.	Given an array and a value Y, count and print the number of array values greater than Y.


function count (x, Y) {
    var count = 0; newArray = [];

    for (var i=0; i< x.length; i++)
        {
        if (x[i] > Y) {
            count = count+=1;
            newArray.push(x[i]);
        }
    }
    console.log("The amount of numbers greater than "+ Y +" is " + count + " and the new array is "+ newArray)
}

count([1,2,2,3], 2); 