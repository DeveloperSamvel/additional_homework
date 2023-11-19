function fakeFind(cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return this[i];
        }
    }
}
Array.prototype.fakeFind = fakeFind;

function isSumOfPreviousTwo(element, index, array) {
    if(element === array[index - 1] + array[index - 2]) {
        return element;
    }
}

const res = [4, 5, 8, 13].find(isSumOfPreviousTwo);
const res2 = [4, 5, 8, 13].fakeFind(isSumOfPreviousTwo);

console.log(res); // Output: 13
console.log(res2); // Output: 13
