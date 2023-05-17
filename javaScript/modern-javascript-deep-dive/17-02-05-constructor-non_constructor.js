// //일반 함수 정의 : 함수 선언문, 함수 표현식
// function foo() {}
// const bar = function() {};
// //프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
// const baz = {
//     x : function(){}
// };

// //일반 함수로 정의된 함수만이 constructor
// new foo(); //foo{}
// new bar(); //bar{}
// new baz.x(); // x{}

// //화살표 함수 정의
// const arrow = () => {};

// new arrow(); // TypeError : arrow is not a constructor

// //메서드 정의: ES6의 메서드 축약 표현만 메서드로 인정한다.
// const obj = {
//     x(){}
// };

// new obj.x(); // TypeError: obj.x is no a constructor

function foo(){}

//일반 함수로서 호출
//[[Call]]이 호출된다. 모든 함수 객체는 [[Call]]이 구현되어 있다.
foo();

//생성자 함수로서 호출
//[[Construct]]가 호출횐다. 이때 [[Construct]]를 갖지 않는다면 에러가 발생한다.
new foo() //foo {}