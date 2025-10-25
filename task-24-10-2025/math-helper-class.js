//  4) MathHelper Class — Task Requirements
// Task: Create a utility class called MathHelper that contains a static method.

// Requirements:
// 1. The class should not require creating an object.
// 2. Add a static method square(n) that returns the square of a number.
// 3. Test the method directly by calling MathHelper.square(4) and print the result.

class MathHelper {
    static square(n) {
        return n ** 2;
    }
}

const square = MathHelper.square(4);

console.log(`The square is ${square}`);




