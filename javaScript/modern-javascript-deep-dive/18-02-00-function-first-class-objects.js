function square(number){
    return number * number;
}

console.dir(square);

console.log(Object.getOwnPropertyDescriptors)

/*
{
    length: {value: 1, writable: false, enumerable: false, configurable: true},
    name: {value: "square", writable: false, enumerable: false, configurable: true},
    arguments: {value: null, writable: false, enumerable: false, configurable: false},
    caller: {value: null, writable: false, enumerable: false, configurable: false},
    prototype: {value: {...}, writable: true, enumerable: false, configurable: false}
}
*/

// __proto__는 square 함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptor(square, '__proto__')); // undefined

// __proto__는 Obejct.prototype 객체의 접근자 프로퍼티다.
//square함수는 Obejct.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
 //{ get: [Function: get __proto__], set: [Function: set __proto__], enumerable: false,configurable: true}
