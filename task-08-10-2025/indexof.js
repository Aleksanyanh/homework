// 6. indexOf
// Description: Returns the first index at which a given element 
// can be found in the array, or -1 if it is not present.
// Signature: function(searchElement, fromIndex)
// Returns: Number	

Array.prototype.myIndexOf = function (searchElement, fromIndex) {

    if (fromIndex < 0) {
        return -1;
    }

    let i = fromIndex || 0;

    for (; i < this.length; i++) {
        if (searchElement === this[i]) {
            return i;
        }
    }

    return -1;
}

const arr = [22, 55, 444];

const findIndex = arr.myIndexOf(444);

console.log(findIndex);




