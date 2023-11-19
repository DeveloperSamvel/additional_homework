function fakeFilter(cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }

    return newArr;
}
Array.prototype.fakeFilter = fakeFilter;

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const res = words.filter((word) => word.length > 6);
const res2 = words.fakeFilter((word) => word.length > 6);


console.log(res);
console.log(res2);
// Output: [ 'exuberant', 'destruction', 'present' ]
