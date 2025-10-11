// 4. some
// Description: Tests whether at least one element in the array passes 
// the test implemented by the provided function.
// Signature: function(callback(currentValue, index, array))
// Returns: Boolean

Array.prototype.mySome = function (cb) {

    if (typeof (cb) !== "function") {
        throw new TypeError(`${cb} is not function`);
    }

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (cb(this[i], i, this)) {
                return true;
            }
        }
    }

    return false;

}

const arr = [22, 55, 444];

const newArr = arr.mySome((item, i, arr) => {
    return item > 300;
});

console.log(newArr);




