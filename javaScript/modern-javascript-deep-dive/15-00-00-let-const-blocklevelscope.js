//--------------------- let const 블록레벨스코프 ---------------------------//
//------------------ var 키워드로 선언한 변수의 문제점 -----------------------//
// 변수 중복 선언 허용
// var x = 1;
// var y = 1;

// //var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// //초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
// var x = 100;

// //초기화문이 없는 변수 선언문은 무시된다.
// var y;

// console.log(x); //100
// console.log(y); //1

// //함수 레벨 스코프
// //[예제1]
// var x = 1;
// if (true){
//     // x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x 변수는 중복 선언된다.
//     // 이는 의도치 않게 변수값이 변경되는 부작용을 발생시킨다.
//     var x = 10;
// }

// console.log(x); //10

// //[예제2]
// var i = 10;

// //for문에서 선언한 i는 전역 벼누다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
// for (var i = 0; i < 5; i++){
//     console.log(i); // 0 1 2 3 4
// }

// //의도치 않게 i변수의 값이 변경되었다.
// console.log(i); // 5


// // 이 시점에는 변수 호이스팅에 의해 이미 foo 변수가 선언되었다. (1. 선언단계)
// // 변수 foo는 undefined로 초기화된다. (2. 초기화단계)
// console.log(foo); //undefined

// // 변수에 값을 할당 (3.할당단계)
// foo = 123;

// console.log(foo); //123

// // 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다.
// var foo;

// //[변수 중복 선언 금지]
// var foo = 123;
// // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
// var foo = 456;
// let bar = 123;
// // let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
// //let bar = 456; //SyntaxError: Identifier 'bar' has already been declared


// //[블록 레벨 스코프]
// let foo = 1; //전역 변수

// {
//     let foo = 2; //지역 변수
//     let bar = 3; //지역 변수
// }

// console.log(foo); // 1
// console.log(bar); // ReferenceError: bar is not defined

// let i = 10; // 전역 변수
// function foo(){
//     let i = 100;

//     for (let i = 1; i < 3; i++){
//         console.log(i); // 1 2 
//     }

//     console.log(i); // 100
// }

// foo();
// console.log(i); // 10

//------------------ 변수 호이스팅 -----------------------//
// console.log(foo); //ReferenceError: Cannot access 'foo' before initialization
// let foo; 

// 런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화되지 않았다.
// 초기화 이전의 일시적 사각지대에서는 변수를 참조할 수 없다.
// console.log(foo); //ReferenceError: Cannot access 'foo' before initialization

// let foo;
// console.log(foo); //undefined

// foo =1;
// console.log(foo); //1

// let foo = 1;
// {
//     console.log(foo); //ReferenceError: Cannot access 'foo' before initialization
//     let foo = 2;
// }

// //전역 변수
// var x = 1;
// //암묵적 전역
// y = 2;
// //전역 함수
// function foo(){}

// // [브라우서 환경에서 실행해야함]
// // var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
// console.log(window.x); //1
// // 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
// console.log(x);

// // 암묵적 전역은 전역 객체 window의 프로퍼티다.
// console.log(window.y);
// console.log(y);

// // 함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티다.
// console.log(window.foo);
// // 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
// console.log(foo);

// // [브라우서 환경에서 실행해야함]
// let x = 1;

// // let const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
// console.log(window.x); //undefined
// console.log(x); //1

//const foo = 1;

//const foo; //SyntaxError: Missing initializer in const declaration

// {
//     //변수 호이스팅이 발생하지 않는 것처럼 동작한다.
//     //console.log(foo); //ReferenceError: Cannot access 'foo' before initialization
//     const foo = 1;
//     console.log(foo); //1
// }

// //블록 레벨 스코프를 가진다
// console.log(foo); //ReferenceError: foo is not defined

// const foo = 1;
// foo =2;

/*
    0.1은 어떤 의미로 사용했는지 명확히 알기 어렵고
    세율을 의미하는 0.1은 쉽게 바뀌지 않는 값이다.
    이때 세율을 상수로 정의하면 값의 의미를 쉽게 파악할 수 있고 변경될 수 없는 고정값으로 사용할 수 있다.
*/
// // 공급가액
// let preTaxPrice = 100;

// // 공급대가
// // 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
// let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);

// console.log(afterTaxPrice); //110

//--------------------------------------------------------

// const TAX_RATE = 0.1;

// // 세전 가격
// let preTaxPrice = 100;

// // 세후 가격
// let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

// console.log(afterTaxPrice); //110

const person = {
    name: 'jo'
};

// 객체는 변경 가능한 값이다. 다라서 재할당 없이 변경이 가능하다.
person.name = 'sunmie';
console.log(person); //{ name: 'sunmie' }