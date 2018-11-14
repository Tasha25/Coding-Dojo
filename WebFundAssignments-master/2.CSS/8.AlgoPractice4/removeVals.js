4.	Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].


function removeVals(value,arg1) {

    for (var i =0; i < value.length; i++) {

        if (value[i] == value[arg1]){
            value.pop();
        }
    }
    return value;  
}


removeVals([20,30,40,50,60,70],2) // [20,30,70]