// 3. filter
// Description: Creates a new array with all elements that pass the test implemented by the provided function.
// Signature: function(callback(currentValue, index, array))
// Returns: Array

Array.prototype.myFilter = function (cb) {

    if (typeof (cb) !== "function") {
        throw new TypeError(`${cb} is not function`);
    }

    const newArr = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (cb(this[i], i, this)) {
                newArr.push(this[i]);
            }
        }
    }

    return newArr;

}

const arr = [22, 55, 444];

const newArr = arr.myFilter((item, i, arr) => {
    return item > 300;
});

console.log(newArr);




