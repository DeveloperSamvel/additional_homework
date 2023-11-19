function fakeReduce (callback, initialValue) {
    if(!initialValue && this.length === 0) {
        throw Error("Reduce of empty array with no initial value2");
    }

    let accumulator = initialValue + this[0];
  
    for (let i = 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};
  
Array.prototype.fakeReduce = fakeReduce;
  
const res = [2, 1, 4, 5, 7].reduce((acc, curr) => acc + curr, 11);
const res2 = [2, 1, 4, 5, 7].fakeReduce((acc, curr) => acc + curr, 11);

console.log(res); // Вывод: 30
console.log(res2); // Вывод: 30
