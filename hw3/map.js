function fakeMap(cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i, this));
    }

    return newArr;
}
Array.prototype.fakeMap = fakeMap;

const numbers = [1, 2, 3, 4, 5];
const res = numbers.map(function (currentValue, index, array) {
    const nextElement = array[index + 1];
    return currentValue + (nextElement || 0);
});
const res2 = numbers.fakeMap(function (currentValue, index, array) {
    const nextElement = array[index + 1];
    return currentValue + (nextElement || 0);
});


console.log(res);
console.log(res2);
// Output: [3, 5, 7, 9, 5]
