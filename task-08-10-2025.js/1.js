// 1. forEach
// Description: Executes a provided function once for each array element.
// Signature: function(callback(currentValue, index, array))
// Returns: undefined

Array.prototype.myForEach = function (cb) {

    if (typeof (cb) !== "function") {
        throw new TypeError(`${cb} is not function`);
    }

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            cb(this[i], i, this);
        }
    }
}

const arr = [22, 55];

arr.myForEach((item, i, arr) => {
    console.log(`item => ${item}, index => ${i}, array => ${arr}`);
});



