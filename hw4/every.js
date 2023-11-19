function fakeEvery (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }

    return true;
}

Array.prototype.fakeEvery = fakeEvery;

const res = [1, 2, 3, 4, 5].every((elem) => elem > 0);
const res2 = [1, 2, 3, 4, 5].fakeEvery((elem) => elem > 0);

console.log(res); // Output: true
console.log(res2); // Output: true
