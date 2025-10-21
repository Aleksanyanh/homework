// 6. Check if the string "Learning JavaScript" contains the substring "Java".

function checkSubstring(str, target) {
    let find = '';
    let targetIndex = 0;

    for (let i = 0; i < str.length; i++) {

        if (find === target) {
            return true;
        }

        if (str[i] === target[targetIndex]) {
            find += str[i];
            targetIndex++;
        } else {
            find = '';
            targetIndex = 0;
        }

    }

    return find === target;
}

console.log(checkSubstring("Learning java", "java"));

