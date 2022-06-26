function getAddFunc(x) {
    return y => y + x;
}

var addFunc = getAddFunc(3);

console.log(addFunc(3));
console.log(addFunc(10));
