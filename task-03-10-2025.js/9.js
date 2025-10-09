function foo(a, b, c) {
    return Math.abs(a + b - c) < Number.EPSILON;
}


console.log(foo(-0.1, -0.2, -0.3));
