function curry(fn) {
    return function curried (...args) {
        if(args.length < fn.length) {
            return function returnFn (arg) {
                return curried (...args, arg);
            }
        }
        else {
            return fn(...args);
        }
    }
}

function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1, 2)(3));
console.log(curriedAdd(1, 2, 3));

// Creation Phase
// [[globalContextRef]] : {
//     LexicalEnv: {
//         context: this,
//         EnvRecord: {
//             arguments: {
//                 curriedAdd: <uninitialized>
//             },
//             curry: [[curryFunctionRef]],
//             add: [[addFunctionRef]],
//         },
//         outer: null
//     }
// }
// [[addFunctionRef]]: {
//   LexicalEnv: {
//     context: this,
//     EnvRecord: {
//         arguments: {
//             a: <uninitialized>,
//             b: <uninitialized>,
//             c: <uninitialized>,
//         },
//     },
//     outer: [[globalContextRef]]
//   }
// }
// [[curryFunctionRef]]: {
//   LexicalEnv: {
//     context: this,
//     EnvRecord: {
//         arguments: {
//             fn: <uninitialized>
//         },
//         curried: [[curriedFunctionRef]]
//     },
//     outer: [[globalContextRef]]
//   }
// }
// [[curriedFunctionRef]]: {
//   LexicalEnv: {
//     context: this,
//     EnvRecord: {
//         arguments: {
//             args: <uninitialized>
//         },
//         curried: [[returnFnFunctionRef]]
//     },
//     outer: [[curryFunctionRef]]
//   }
// }
// [[returnFnFunctionRef]]: {
//   LexicalEnv: {
//     context: this,
//     EnvRecord: {
//         arguments: {
//             arg: <uninitialized>
//         }
//     },
//     outer: [[curriedFunctionRef]]
//   }
// }


// Execution Phase
// [[globalContextRef]] : {
//     LexicalEnv: {
//         context: this,
//         EnvRecord: {
//             arguments: {
//                 curriedAdd: [[curryFunctionRef]]
//             },
//             curry: [[curryFunctionRef]],
//             add: [[addFunctionRef]],
//         },
//         outer: null
//     }
// }
// [[curriedFunctionRef#1]]: {
//   LexicalEnv: {
//     context: this,
//     EnvRecord: {
//         arguments: {
//             args: [1]
//         },
//         curried: [[returnFnFunctionRef]]
//     },
//     outer: [[curryFunctionRef]]
//   }
// }
// [[returnFnFunctionRef]]: {
//   LexicalEnv: {
//     context: this,
//     EnvRecord: {
//         arguments: {
//             args: [1, 2]
//         }
//     },
//     outer: [[curriedFunctionRef]]
//   }
// }
// [[addFunctionRef#1]]: {
//   LexicalEnv: {
//     context: this,
//     EnvRecord: {
//         arguments: [1, 2, 3],
//     },
//     outer: [[globalContextRef]]
//   }
// }
