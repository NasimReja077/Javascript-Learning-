function factorial(n) {

    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

let n = 5;

for (let i = 0; i < n; i++) {

    let row = "";

    for (let j = 0; j <= i; j++) {

        let value =
            factorial(i) /
            (
                factorial(j) *
                factorial(i - j)
            );

        row += value + " ";
    }

    console.log(row);
}