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

let i = 10; // 전역 변수
function foo(){
    let i = 100;

    for (let i = 1; i < 3; i++){
        console.log(i); // 1 2 
    }

    console.log(i); // 100
}

foo();
console.log(i); // 10

