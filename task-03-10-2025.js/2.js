// 2. Create a function that converts a given string to uppercase.

function getUpperCase(str) {

    let upperText = '';

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code >= 97 && code <= 122) {
            let upperCode = String.fromCharCode(code - 32);
            upperText += upperCode;
        } else {
            upperText += str[i];
        }
    }

    return upperText;
}

console.log(getUpperCase('hello world'));

