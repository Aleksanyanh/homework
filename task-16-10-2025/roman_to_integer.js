var romanToInt = function (s) {
    var roman_numerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    var res = 0;

    for (var i = 0; i < s.length; i++) {

        var int = roman_numerals[s[i]];
        var nextInt = roman_numerals[s[i + 1]];

        if (int === 1 && nextInt === 5 ||
            int === 1 && nextInt === 10 ||
            int === 10 && nextInt === 50 ||
            int === 10 && nextInt === 100 ||
            int === 100 && nextInt === 500 ||
            int === 100 && nextInt === 1000
        ) {
            int *= -1;
        }
        res += int;
    }

    return res;

};

console.log(romanToInt("MCMXCIV"));
