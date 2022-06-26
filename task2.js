function printIsNumberSimple(n)
{
    if (typeof n !== 'number' || isNaN(n))
    {
        console.log("Нужно число");
    } else if (n <= 0) {
        console.log("Нужно положительное число");
    } else if (n === 1) {
        console.log("1 - Не простое и не сложное");
    } else {
        for (let i = 2; i < n; ++i)
        {
            if (n % i === 0)
            {
                console.log(`Число ${n} делится на ${i}`);
                return;
            }
        }
        console.log(`Число ${n} простое`);
    }
}

printIsNumberSimple("Hello");
printIsNumberSimple(1);
printIsNumberSimple(3);
printIsNumberSimple(4);
printIsNumberSimple(5);