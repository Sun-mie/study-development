//--------------------- 스코프  ---------------------------//
// function add(x, y){
//     // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
//     // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
//     console.log(x, y);;
//     return x + y;
// }

// add(2, 5); //2 5

// // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
// //console.log(x, y); //ReferenceError: x is not defined

// // 변수는 코드의 가장 바깥 영역뿐 아니라 코드 블록이나 함수 몸체 내에서도 선언할 수 있다.
// // 이때 코드 블록이나 함수는 중첩될 수 있다.
// var var1 = 1; //코드의 가장 바깥 영역에서 선언한 변수

// if (true){
//     var var2 = 2; // 코드 블록 내에서 선언한 변수
//     if (true) {
//         var var3 = 3; // 중첩된 함수 내에서 선언한 변수
//     }
// }

// function foo(){
//     var var4 = 4; // 함수 내에서 선언한 변수
//     function bar(){
//         var var5 = 5; // 중첩된 함수 내에서 선언한 변수
//     }
// }

// console.log(var1);
// console.log(var2);
// console.log(var3);
// //console.log(var4); //ReferenceError: var4 is not defined
// //console.log(var5); // ReferenceError: var5 is not defined

// var x = 'global';

// function foo(){
//     var x = 'local';
//     console.log(x); // local
// }

// foo();

// console.log(x); // global

// // var 키워드와 let키워드의 차이
// // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용된다.
// // 이는 의도치 않게 변수값이 재할당되어 변경되는 부작용을 발생시킨다.

// // var키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
// function foo(){
//     var x = 1;
//     var x = 2;
//     console.log(x);
// }
// foo();

// // 하지만 let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
// // let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
// function bar(){
//     let x = 1;
//     // let x = 2; //SyntaxError: Identifier 'x' has already been declared
//     console.log(x);
// }
// bar();

//전역과 전역 스코프
var x = 'global x';
var y = 'global y';

function outer(){
    var z = 'outer\'s local z';
    console.log(x); // global x
    console.log(y); // global y
    console.log(z); // outer's local z

    function inner(){
        var x = 'inner\'s local x';

        console.log(x); // inner's local x
        console.log(y); // global y
        console.log(z); // outer's local z
    }

    inner();
}

outer();
console.log(x); // global x
// console.log(z); //ReferenceError: z is not defined