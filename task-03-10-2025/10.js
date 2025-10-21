function foo(arr, target) {

    const ob = {};

    for (let i = 0; i < arr.length; i++) {

        let index = ob[target - arr[i]];

        if (index || index === 0) {
            return [index, i];
        }

        ob[arr[i]] = i;
    }

    return [];

}

console.log(foo([1, 2, 4, 6, 10], 3));
