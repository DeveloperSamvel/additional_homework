function fakeForEach(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}
Array.prototype.fakeForEach = fakeForEach;

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
words.forEach((element) => console.log(element));
words.fakeForEach((element) => console.log(element));


// Output: spray
// Output: elite
// Output: exuberant
// Output: destruction
// Output: present
