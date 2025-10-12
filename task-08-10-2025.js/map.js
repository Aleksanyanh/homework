// 2. map
// Description: Creates a new array with the results of calling a provided 
// function on every element in the array.
// Signature: function(callback(currentValue, index, array))
// Returns: Array

Array.prototype.myMap = function (cb) {

    if (typeof (cb) !== "function") {
        throw new TypeError(`${cb} is not function`);
    }

    const newArr = [];

    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i, this));
    }

    return newArr;

}

const arr = [22, 55, 444];

const newArr = arr.myMap((item, i, arr) => {
    if (item < 100) {
        return item;
    } else {
        return item * 2;
    }
});

console.log(newArr);




