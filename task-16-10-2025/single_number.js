var singleNumber = function (nums) {

    var lookup = {};

    for (var i = 0; i < nums.length; i++) {
        lookup[nums[i]] = (lookup[nums[i]] || 0) + 1;
    }

    for (var key in lookup) {
        if (lookup[key] === 1) {
            return +key;
        }

    }
}

console.log(singleNumber([4, 1, 2, 1, 2]));
