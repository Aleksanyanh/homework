Array.prototype.myReduce = function (cb, initialValue) {

    if (typeof (cb) !== "function") {
        throw new TypeError(`${cb} is not function`);
    }

    let res = initialValue || 0;

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            res = cb(this[i], res);
        }
    }

    return res;

}

const arr = [1, 2, 3, 4, 5];

const result = arr.myReduce((acc, value) => {
    return acc * value;
}, );

console.log(result);

