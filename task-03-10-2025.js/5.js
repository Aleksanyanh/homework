// 5. Merge the arrays let array1 = [1, 2]; and let array2 = [3, 4]; into a new array.

function mergeArrays(array1, array2) {
    var newArr = array1.slice();

    for (let i = 0; i < array2.length; i++) {
        newArr.push(array2[i]);
    }

    return newArr;
}

console.log(mergeArrays([1, 2,], [3, 4]));

