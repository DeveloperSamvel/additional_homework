function fakeCall(context, ...args) {
    console.log("this context", context);
    console.log("this this", this);
    console.log("this args", args);
    return this(args);
}

Function.prototype.fakeCall = fakeCall;

const callback = function (item) {
    console.log("this callback", this);
    console.log("this callback item", item);
    this.item = item;
    // return (item)
    return this;
};
let element = callback.fakeCall(5, 4);
console.log(element);
// let element = callback.call(5, 4);
// console.log(element);

// function fakeMap(callback, arg) {
//     const newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         let element = callback.fakeCall(arg, this[i], i, this);
//         newArr.push(element);
//     }
//     return newArr;
// }

// Array.prototype.fakeCall = fakeCall;
// Array.prototype.fakeMap = fakeMap;

// const calculateWithFactor = function (item) {
//     return item * this.factor;
// };

// const obj = {factor: 2};
// const res = [1, 2, 3].map(calculateWithFactor, obj);
// const res2 = [1, 2, 3].fakeMap(calculateWithFactor, obj);

// console.log(res); // Output: [ 2, 4, 6 ]
// console.log(res2); // Output: [ 2, 4, 6 ]