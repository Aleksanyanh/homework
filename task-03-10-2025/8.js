// 8. Compute the sum of all elements in the array let expenses = [50, 75, 100];.

function sumElements(arr) {
    var sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }

    return sum;
}

console.log(sumElements([50, 75, 100]));

