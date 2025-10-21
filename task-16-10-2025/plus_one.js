var plusOne = function (digits) {

    var num = 0;
    for (var i = 0; i < digits.length; i++) {
        var exp = digits.length - i - 1;
        var digit = digits[i] * (10 ** exp);
        num += digit;
    }
    ++num;

    var str = String(num);
    var res = [];

    for (var i = 0; i < str.length; i++) {

        res.push(+str[i]);
    }

    return res;
};


console.log(plusOne([1, 2, 3]));
