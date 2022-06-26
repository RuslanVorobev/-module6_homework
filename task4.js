function printNumbers(a, b) {
    let x = a;
    let interval = a <= b
        ? setInterval(() => {
            console.log(x++);
            if (x > b) {
                clearInterval(interval);
            }
        }, 1000)
        : setInterval(() => {
            console.log(x--);
            if (x < b) {
                clearInterval(interval);
            }
        }, 1000);
}

printNumbers(5, 10);
printNumbers(500, 498);
