// 7. Find the index of the value 9 in the array let numList = [3, 6, 9, 12];.

function findNum(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }

    }

    return -1;
}

console.log(findNum([3, 6, 9, 12], 9));

