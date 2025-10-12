// 5. every
// Description: Tests whether all elements in the array pass 
// the test implemented by the provided function.
// Signature: function(callback(currentValue, index, array))
// Returns: Boolean

Array.prototype.myEvery = function (cb) {

    if (typeof (cb) !== "function") {
        throw new TypeError(`${cb} is not function`);
    }

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (!cb(this[i], i, this)) {
                return false;
            }
        }
    }

    return true;

}

const arr = [22, 55, 444];

const newArr = arr.myEvery((item, i, arr) => {
    return item > 21;
});

console.log(newArr);




