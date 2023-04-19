// // 빈 객체의 생성
// const person = new Object();

// // 프로퍼티 추가
// person.name = 'Jo';
// person.sayHello = function(){
//     console.log('Hi, my name is ' + this.name);
// };

// console.log(person);
// person.sayHello();

// // String 생성자 함수에 의한 String 객체 생성
// const strObj = new String('jo');
// console.log(typeof strObj); //object
// console.log(strObj); //[String: 'jo']

// // Number 생성자 함수에 의한 Number 객체 생성
// const numObj = new Number(123);
// console.log(typeof numObj); //object
// console.log(numObj); //[Number: 123]

// // Boolean 생성자 함수에 의한 Boolean 객체 생성
// const boolObj = new Boolean(true);
// console.log(typeof boolObj); //object
// console.log(boolObj); //[Boolean: true]

// // Function 생성자 함수에 의한 Function 객체(함수) 생성
// const func = new Function('x', 'return x * x');
// console.log(typeof func); //function
// console.log(func); //[Function: anonymous]

// // Array 생성자 함수에 의한 Array 객체(배열) 생성
// const arr = new Array(1, 2, 3);
// console.log(typeof arr); //object
// console.log(arr); //[ 1, 2, 3 ]

// // RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식)생성
// const regExp = new RegExp(/ab+c/i);
// console.log(typeof regExp); //object
// console.log(regExp); ///ab+c/i

// // Date 생성자 함수에 의한 Date 객체 생성
// const date = new Date();
// console.log(typeof date); //object
// console.log(date); //2023-04-03 T12:46:52.841Z (대한민국 표준시)

// const circle1 = {
//     radius: 5,
//     getDiameter(){
//         return 2 * this.radius;
//     }
// };

// console.log(circle1.getDiameter()); //10

// const cirecle2 = {
//     radius: 10,
//     getDiameter() {
//         return 2 * this.radius;
//     }
// };

// console.log(cirecle2.getDiameter()); //20

// // 생성자 함수
// function Circle(radius){
//     //생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
//     this.radius = radius;
//     this.getDiameter = function(){
//         return 2 * this.radius;
//     };
// }

// // 인스턴스의 생성
// const circle1 = new Circle(5);
// const circle2 = new Circle(10);

// console.log(circle1.getDiameter()); //10
// console.log(circle2.getDiameter()); //20

// // 함수는 다양한 방식으로 호출될 수 있다.
// function foo(){
//     console.log(this);
// }

// // 일반적인 함수로서 호출
// // 전역 객체는 브라우저 환경에서는 window, Node.js 환경에서는 global을 가리킨다.
// foo(); // window

// const obj = { foo }; //ES6 프로퍼티 축약 표현

// // 메서드로서 호출
// obj.foo(); // obj

// // 생성자 함수로서 호출
// const inst = new foo(); //inst

// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다.
// 즉, 일반 함수로서 호출된다.
const circle3 = Circle(15);

// 일반 함수로서 호출된 Circle은 반환문의 없으므로 암묵적으로 undefined
console.log(circle3);

// 일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킨다.
console.log(radius);