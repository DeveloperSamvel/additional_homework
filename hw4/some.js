function fakeSome(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }

    return false;
};
Array.prototype.fakeSome = fakeSome;

const res = [1, 2, 3, 4, 5].some((element) => element > 3);
const res2 = [1, 2, 3, 4, 5].fakeSome((element) => element > 3);

console.log(res); // Output: true
console.log(res2); // Output: true