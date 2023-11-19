function fakeNew(constructor, ...args) {
    const newObj = {};
    newObj.__proto__ = constructor.prototype;

    const res = constructor.apply(newObj, args);

    if(typeof res === "object" || typeof res === "function") {
        return res;
    }

    return newObj;
}

function Person(age) {
    this.age = age;
}

const data = fakeNew(Person, "");
console.log(data);
