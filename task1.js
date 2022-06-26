function printArrayStatistics(arr) {
    let zeros = 0;
    let evens = 0;
    let odds = 0;
    let garbage = 0;

    arr.forEach(x => {
        if (typeof x === 'number' && !isNaN(x)) {
            if (x === 0) {
                zeros++;
            } else if (x % 2 == 0) {
                evens++;
            } else {
                odds++;
            }
        }
        else {
            garbage++
        }
    });

    console.log(`Нулей: ${zeros}. Четных: ${evens}. Нечетных: ${odds}. Не чисел: ${garbage}.`);
}

printArrayStatistics([false, "Hello", undefined, 2]);
printArrayStatistics([0, 1, 2, 3]);
