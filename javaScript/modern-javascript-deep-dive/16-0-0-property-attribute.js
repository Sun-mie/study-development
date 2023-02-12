// const o ={};

// // 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다.
// o.[[Prototype]] //Uncaught SyntaxError: Unexpected token '['
// // 단, 일 내 슬ㅗ과 내 메드 한여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.
// o.__proto__ //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// const person = {
//     name : 'Jo'
// };

//프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// //{value: 'Jo', writable: true, enumerable: true, configurable: true}
// //[[Prototype]]

// const person = {
//     name : 'Jo'
// };

// //프로퍼티 동적 생성
// person.age = 30;

// console.log(Object.getOwnPropertyDescriptors(person));

//데이터 프로퍼티
// const person = {
//     name : 'Jo'
// };

// //프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 취득한다.
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// //{value: 'Jo', writable: true, enumerable: true, configurable: true}

// const person ={
//     name : 'Jo'
// };

// //프로퍼티 동적 생성
// person.age = 30;

// console.log(Object.getOwnPropertyDescriptors(person));
// //age: {value: 30, writable: true, enumerable: true, configurable: true}
// //name: {value: 'Jo', writable: true, enumerable: true, configurable: true}

// //접근자 프로퍼티
// const person = {
//     firstName : 'Sunmie',
//     lastName : 'Jo',

//     //fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
//     //getter 함수
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     },
//     //setter 함수
//     set fullName(name){
//         //배열 디스트럭처링 할당 : [31,1 배열 디스트릭처링 할당] 참고
//         [this.firstName, this.lastName] = name.split(' ');
//     }
// };

// //데이터 프로퍼티를 통한 프로퍼티 값의 참조.
// console.log(person.firstName + ' ' + person.lastName); //Sunmie Jo

// //접근자 프로퍼티를 통한 프로퍼티 값의 저장
// //접근자 프로퍼티 fullName에 값을 저장하면 setter함수가 호출된다.
// person.fullName = 'Shine me';
// console.log(person); //{firstName: 'Shine', lastName: 'me'}

// //접근자 프로퍼티를 통한 프로퍼티 값의 참조
// //접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
// console.log(person.fullName); //Shine me

// //firstName은 데이터 프로퍼티다.
// //데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
// let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
// console.log(descriptor);
// //{value: 'Shine', writable: true, enumerable: true, configurable: true}

// //fullName은 접근자 프로퍼티다.
// //접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
// descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log(descriptor);
// //{enumerable: true, configurable: true, get: ƒ, set: ƒ}

// // 일반 객체의 __proto__는 접근자 프로퍼티다.
// Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
// //{enumerable: false, configurable: true, get: ƒ, set: ƒ}

// // 함수 객체의 prototype은 데이터 프로퍼티다.
// Object.getOwnPropertyDescriptor(function(){}, 'prototype');
// //{value: {…}, writable: true, enumerable: false, configurable: false}

// const person = {};

// /* 데이터 프로퍼티 정의 */
// Object.defineProperty(person, 'firstName', {
//     value: 'sunmie',
//     writable: true,
//     enumerable: true,
//     configurable: true
// });

// Object.defineProperty(person, 'lastName', {
//     value: 'Jo'
// });

// let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
// console.log('firstName', descriptor);
// //firstName {value: 'sunmie', writable: true, enumerable: true, configurable: true}

// //디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다.
// descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
// console.log('lastName', descriptor);
// //lastName {value: 'Jo', writable: false, enumerable: false, configurable: false}

// // [[Enumerable]]의 값이 false인 경우
// // 해당 프로퍼티는 for...in 문이나 Object.keys 등으로 열거할 수 없다.
// // lastName프로퍼티의 [[Enumerable]]의 값이 false 이므로 열거되지 않는다.
// console.log(Object.keys(person));
// //['firstName']

// // [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없다.
// // lastName 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없다.
// // 이때 값을 변경하면 에러는 발생하지 않고 무시된다.
// person.lastName = 'Shine';
// console.log(person.lastName); // 'Jo'

// // [[Configurable]]의 값이 fasle인 경우 해당 프로퍼티를 재정의할 수 없다.
// // Obejct.defineProperty(person, 'lastName', { enumerable: true });
// // Uncaught TypeError: Cannot redefine property: lastName

// descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
// console.log('lastName', descriptor);
// // lastName {value: 'Jo', writable: false, enumerable: false, configurable: false}


// console.log(' -- 접근자 프로퍼티 정의 --')
// /* 접근자 프로퍼티 정의 */
// Object.defineProperty(person, 'fullName', {
//     //getter
//     get(){
//         return `${this.firstName} ${this.lastName}`;
//     },
//     //setter
//     set(name){
//         [this.firstName, this.lastName] = name.split(' ');
//     },
//     enumerable: true,
//     configurable: true
// });

// descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log('fullName', descriptor);
// // fullName {enumerable: true, configurable: true, get: ƒ, set: ƒ}

// person.fullName = 'Sun mieee';
// console.log(person);
// // {firstName: 'Sun', lastName: 'Jo'}

// const person = {};

// Object.defineProperties(person, {
//     // 데이터 프로퍼티 정의
//     firstName: {
//         value: 'Sunmie',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     lastName: {
//         value: 'Jo',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     // 접근자 프로퍼티 정의
//     fullName:{
//         //getter
//         get(){
//             return `${this.firstName} ${this.lastName}`;
//         },
//         set(name){
//             [this.firstName, this.lastName] = name.split(',');
//         },
//         enumerable: true,
//             configurable: true
//     }
// });

// person.fullName = 'sun,mie';
// console.log(person); //{firstName: 'sun', lastName: 'mie'}

/* 객체 변경 방지 */
// 객체 확장 금지
const person = {
    name: 'Jo'
};

// person 객체는 확장이 금지된 객체가 아니다.
console.log(Object.isExtensible(person)); //true

// person 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(person);

// person 객체는 확장이 금지된 객체
console.log(Object.isExtensible(person)); //false

// 프로퍼티 추가가 금지된다.
person.age = 30;
console.log(person); //{ name: 'Jo' }

//프로퍼티 추가는 금지되지만 삭제는 가능하다.
delete person.name;
console.log(person); //{}

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
Object.defineProperty(person, 'age', {value: 30});