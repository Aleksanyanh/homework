// 4. Reverse the string "hello" without using a built-in function.

function reverseStr(str) {
    var reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseStr('hello'));

