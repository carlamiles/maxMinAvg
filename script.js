// Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.

// Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for(var i=1; i<arr.length; i++) {
        sum+=arr[i];
        if(arr[i] > max) {
            max = arr[i];
        }
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    var avg = sum / arr.length;
    return `The minimum is ${min}, the maximum is ${max}, and the average is ${avg}.`

}

maxMinAvg([1, -2, 9, 4]);