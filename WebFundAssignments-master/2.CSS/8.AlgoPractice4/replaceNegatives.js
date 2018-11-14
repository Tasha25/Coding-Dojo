// 3.	Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function replaceNegatives(array){
      for (var i=0; i<array.length; i++){
        if (array[i] < 0) {
        array[i] = "Dojo";
        }
     }
       return value;
}


replaceNegatives( [1,2,-3,-5,5])  //return [1,2, "Dojo", "Dojo", 5]
    