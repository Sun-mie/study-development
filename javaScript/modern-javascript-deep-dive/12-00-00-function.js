//--------------------- 함수 ---------------------------//

// //함수 - 함수 생성 방법
// //1. 함수 선언문
// function add(x, y){
//     return x + y;
// }

// var result = add(2, 5); // 함수호출
// console.log(result); // 반환값 7

// // 변수에 함수 리터럴 할당
// var f = function add(x,y){
//     return x + y;
// }

// //--------------------- 함수 - 함수 정의 ---------------------------//
// // 1. 함수 선언문
// function add(x, y){
//     return x + y;
// };

// // 2. 함수 표현식
// var sum = function (x,y) {
//     return x + y;
// };

// // 3. function 생성자 함수
// var sum = new Function('x', 'y', 'return x + y');

// // 4. 화살표 함수 (ES6)
// var sum = (x, y) => x + y;

// console.log(sum(2,5));

// // console.dir은 함수 객체의 프로퍼티까지 출력한다.
// // 단 Node.js에서는 console.log와 같은 결과가 출력된다.
// console.dir(sum);  //f sum(x,y)

// // 함수 선언문은 표현식이 아닌 문이므로 변수에 할당할 수 없다.
// // 하지만 함수 선언문이 변수에 할당되는 것처럼 보인다.
// var adds = function add (x, y){
//     return x + y;
// };

// console.log(adds(2,5)); //7

// // 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// // 함수 선언문에서는 함수 이름을 생략할 수 없다.
// function foo() {console.log('foo');};
// foo();

// // 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// // 함수 리터럴에서는 함수 이름을 생략할 수 있다.
// // (function bar() {console.log('bar');});
// // bar(); //ReferenceError: bar is not defined

// // 그룹 연산자의 피연산자는 값으로 평가될 수 있는 표현식이어햐 한다.
// // 따라서 표현식이 아닌 문의 함수 선언문을 피연산자로 사용할 수 없다.


// //--------------------- 함수 - 함수 리터럴의 내부 동작 차이 ---------------------------//
// // 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// // 함수 선언문에서는 함수 이름을 생략할 수 없다.
// function foo() {console.log('foo');}

// if(1){
//     console.log('true');
// }


// // 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// // 함수 리터럴에서는 함수 이름을 생략할 수 있다.
// (function () {console.log('bar');});
// // bar(); //ReferenceError: bar is not defined

// var add = function add(x, y){
//     return x + y ;
// };
// console.log(add(2,5));


// //--------------------- 함수 - 함수 표현식 ---------------------------//
// var add = function(x, y){
// 	return x + y;
// };

// console.log(add(2, 5));

// // 함수 리터럴의 함수 이름을 생략할 수 있다. (= 익명함수)
// // 함수 표현식의 함수 리터럴은 함수 이름을 생략하는 것이 일반적이다.

// // 기명 함수 표현식
// var add = function foo (x, y){
//     return x + y;
// };

// //함수 객체를 가리키는 식별자로 호출
// console.log(add(2, 5));

// // 함수 이름으로 호출하면 ReferenceError가 발생한다.
// // 함수 이름은 함수 몸체 내부에서만 유효한 식별자다.
// console.log(foo(2, 5)); // ReferenceError : foo is not defined


//--------------------- 함수 - 함수 생성 시점과 함수 호이스팅 ---------------------------//

// //함수 참조
// console.dir(add); // ƒ add(x, y)
// console.dir(sub); // undefined

// //참수 호출
// console.log(add(2, 5)); // 7
// console.log(sub(2, 5)); // TypeError: sub is not a function

// //함수 선언문
// function add(x, y){
//     return x + y;
// }

// 함수 리터럴의 함수 이름을 생략할 수 있다. (= 익명함수)
// 함수 표현식의 함수 리터럴은 함수 이름을 생략하는 것이 일반적이다.
//함수 표현식
// var sub = function(x, y){
//     return x-y;
// }


// //--------------------- 함수 - 생성자 함수 ---------------------------//

// var addB = new Function('x', 'y', 'return x + y');
// console.log(addB(2,5)); // 7

// var addb = Function('x', 'y', 'return x+y');
// console.log(addb(5,5)); //10

// // 생성자함수는 함수 선언문과 함수 표현식으로 생성한 함수와 다르게 동작함
// var add1 = (function(){
//     var a = 10;
//     return function (x, y){
//         return x + y + a;
//     };
// }());
// console.log(add1(1,2));

// // var add2 = (function(){
// //     var a = 10;
// //     return new Function('x', 'y', 'return x + y + a;'); 
// // }());
// // console.log(add2(1,2)); //ReferenceError: a is not defined

// //--------------------- 함수 - 화살표 함수 ---------------------------//
// // 화살표 함수
// const addA = (x, y) => x + y;
// console.log(addA(2, 5)); //7


//--------------------- 함수 - 함수 호출 ---------------------------//

// // 함수 선언문
// function add (x, y){
//     return x, y;
// }
// var result = add(1, 2);

// // 함수 호출
// // 인수 1과 2가 매개변수 x, y에 순서대로 할당되고 함수 몸체의 문들이 실행


// function addc(x, y){
// 	return x + y;
// }
// console.log(addc(2,5,10)); //7

// function addd(x, y){
//     console.log(arguments);
//     return x + y;
// }

// addd(2,5,10); // Arguments(3) [2, 5, 10, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// console.log(addc(2)); //NaN 
// console.log(addc('a', 'b')); //'ab'

// function adde(x, y){
//     if (typeof x !== 'number' || typeof y !== 'number'){
//         //매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생
//         throw new TypeError('인수는 모두 숫자 값이어야 합니다.')
//     }
//     return x + y;
// }

// // console.log(adde(2)); //TypeError: 인수는 모두 숫자 값이어야 합니다.
// // console.log(adde('a', 'b')); //TypeError: 인수는 모두 숫자 값이어야 합니다.

// function addf(a, b, c){
//     a = a || 0;
//     b = b || 0;
//     c = c || 0;
//     return a + b + c;
// }

// console.log(addf(1, 2, 3)); // 6
// console.log(addf(1, 2)); // 3
// console.log(addf(1)); // 1
// console.log(addf()); // 0

// function addg(a = 0, b = 0, c = 0){
//     return a + b + c;
// }
// console.log(addg(1,2,3)); // 6
// console.log(addg(1,2)); // 3
// console.log(addg(1)); // 1
// console.log(addg(0)); // 0


// $.ajax({
//     method: 'POST',
//     url: '/user',
//     data: {id: 1, name: 'Jo'},
//     cache: false
// });


// function multiply(x, y){
//     return x * y;
// }

// // 함수 호출은 반환값으로 평가된다.
// var result = multiply(3, 5);
// console.log(result); //15


// function multiply(x, y){
//     return x * y; //반환문
//     // 반환문 이후 다른 문은 실행되지 않고 무시된다.
//     console.log('여기는 실행되지 않음');
// }
// console.log(multiply(3, 5)); // 15


// function foo (){
//     return;
// }
// console.log(foo()); //undefined

// function foo (){
// }
// console.log(foo()); //undefined

// function multiply2(x, y){
//     return // return 키워드와 반환값 사이 줄바꿈이 있으면 세미콜론 자동 삽입 기능(ASI)에 의해 세미콜론이 추가된다.
//     x * y; // 세미콜론에 의해 무시된다.
// }
// console.log(multiply2(5,5)); //undefined




// //--------------------- 함수 - 참조에 의한 전달과 외부 상태의 변경 ---------------------------//
// //매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
// function changeVal(primitive, obj){
//     primitive += 100;
//     obj.name  = 'Kim';
// }

// // 외부 상태
// var num = 100;
// var person = { name: 'Sunmie'};

// console.log(num); //100
// console.log(person); //{ name: 'Sunmie' }

// // 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
// changeVal(num, person);

// // 원시 값은 원본이 훼손되지 않는다.
// console.log(num); //100

// // 객체는 원본이 훼손된다.
// console.log(person); //{ name: 'Kim' }


//--------------------- 함수 - 다양한 함수의 형태  ---------------------------//
/* 즉시 실행 함수 */
// 익명 즉시 실행 함수
// (function (){
//     var a = 3;
//     var b = 5;
//     return a * b;
// }());

// // 기명 즉시 실행 함수
// (function foo(){
//     var a = 3;
//     var b = 5;
//     return a * b;
// }());

//foo(); //ReferenceError: foo is not defined

// function (){ 
//     //...
// }();
//SyntaxError: Function statements require a function name
// 에러 이유: 함수 정의가 함수 선언문의 형식에 맞지 않기 때문 (함수 선언문은 함수 이름을 생략할 수 없다.)


// 기명 함수로 즉시 호출
// function foo(){
//     //...
// }(); 
//SyntaxError: Unexpected token ')'
// 에러 이유 : 세미콜론 자동 삽입 기능에 의해 함수 선언문이 끝나는 위치(함수 코드 블록의 닫는 중괄호 뒤)에 ;이 암묵적으로 추가되어서
// function foo(){};();로 처리됨



// 함수 리터럴을 평가해 함수 객체를 생성하는 방법
// 첫번째가 가장 일반적인 방법
// (function (){
//   // ...  
// }());

// (function(){
//     //...
// })();

// !function(){
//     //...
// }();

// +function(){
//     //...
// }();

// // 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있다.
// var res = (function(){
//     var a = 3;
//     var b = 5;
//     return a * b;
// }());

// console.log(res); //15

// // 즉시 실행 함수에도 일반 함수처럼 인수를 전달할 수 있다.
// res = (function(a, b){
//     return a * b;
// }(5,5));

// console.log(res); //25



/* 재귀 함수 */
// // 10부터 0까지 출력하는 함수
// function countdown(n){
//     for (var i =n; i >= 0; i--)console.log(i);
// }

// console.log(countdown(10));


// // 재귀 함수를 이용해 10부터 0까지 출력
// function countdown(n){
//     if (n <0) return;
//     console.log(n);
//     countdown(n-1); //재귀 호출
// }
// console.log(countdown(10));


// // 재귀 함수를 이용해 팩토리얼 구현
// // 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// // n! = 1 * 2 *...(n-1) * n
// function factorial(n){
//     // 탈출 조건: n이 1이하일 떄 재귀 호출을 멈춘다.
//     if( n <= 1 ) return 1;
//     //재귀 호출
//     return n * factorial(n-1);
// }

// console.log(factorial(0)); // 0! = 1
// console.log(factorial(1)); // 1! = 1
// console.log(factorial(2)); // 2! = 2 * 1 = 2
// console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
// console.log(factorial(4)); // 4! = 4 * 3 * 2 * 1 = 24
// console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120

// function factorial(n){
//     if (n <= 1) return 1;
//     var res = n;
//     while(--n) res *= n;
//     return res;
// }

// console.log(factorial(0)); // 0! = 1
// console.log(factorial(1)); // 1! = 1
// console.log(factorial(2)); // 2! = 2 * 1 = 2
// console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
// console.log(factorial(4)); // 4! = 4 * 3 * 2 * 1 = 24
// console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120


// /* 중첩 함수 */
// function outer(){
//     var x = 1;

//     // 중첩 함수
//     function inner(){
//         var y = 2;
//         //외부 함수의 변수를 참조할 수 있다.
//         console.log(x + y); //3
//     }

//     inner();
// }
// outer();

/* 콜백 함수 */
// 외부에서 전달받은 f를 n만큼 호출한다.
function repeat(n, f){
    for (var i=0 ; i<n ; i++){
        f(i); //i를 전달하면서 f 호출
    }
}

// var logAll = function(i){
//     console.log(i);
// };

// // 반복 호출할 함수를 인수로 전달한다.
// repeat(5, logAll); // 0 1 2 3 4

// var logOdds = function(i){
//     if (i % 2) console.log(i);
// };

// repeat(5, logOdds); // 1 3


// 고차 함수 내부에만 호출되는 콜백 함수의 경우
// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
// 익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
// repeat(5, function(i){
//     if(i %2) console.log(i); //1 3
// });

// logOdds 함수는 단 한 번만 생성된다.
// var logOdds = function (i) {
//     if ( i % 2 ) console.log(i);
// }
// repeat(5, logOdds); //1 3
// // 위 예제에서 함수는 단 한 번만 생성된다. 
// // 하지만 콜백 함수를 익명 함수 리터럴로 정의하면서 곧바로 고차 함수에 전달하면 고차 함수가 호출될 때마다 콜백 함수가 생성된다.


// // 콜백 함수를 사용한 이벤트 처리
// // myButton 버튼을 클릭하면 콜백 함수를 실행한다.
// document.getElementById('myButton').addEventListener('click', function(){
//     console.log('button clicked!');
// });

// // 콜백 함수를 사용한 비동기 처리
// // 1초 후에 메시지를 출력한다.
// setTimeout(function(){
//     console.log('1초 경과');
// }, 1000);



// 콜백 함수를 사용하는 고차 함수 map
// Array.prototype.map() - 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
var res = [1, 2, 3].map(function(item){
    return item * 2;
});
console.log(res); // [ 2, 4, 6 ]


// 콜백 함수를 사용하는 고차 함수 filter
// Array.prototype.filter() -  함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
res = [1, 2, 3].filter(function(item){
    return item % 2;
});
console.log(res); // [ 1, 3 ]


// 콜백 함수를 사용하는 고차 함수 reduce
// Array.prototype.reduce() - 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환
res = [1, 2, 3].reduce(function(acc, cur){
    return acc + cur;
}, 0);
console.log(res); //6


//--------------------- 함수 - 순수 함수와 비순수 함수  ---------------------------//
var count = 0; // 현재 카운트를 나타내는 상태

/* 순수 함수 */
// 순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n){
    return ++n;
}

// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count);

count = increase(count);
console.log(count);


/* 비순수 함수 */
var count = 0;

// 비순수 함수
function increase(){
    return ++count; // 외부 상태에 의존하며 외부 상태를 변경한다.
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하게 어려워진다.
increase();
console.log(count);

increase();
console.log(count);

