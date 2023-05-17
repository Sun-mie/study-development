// 내부메서드 [[call]]과 [[Construct]]
// function foo() {}

// // 함수는 객체이므로 프로퍼티를 소유할 수 있다.
// foo.prop = 10;

// //함수는 객체이므로 메서드를 소유할 수 있다.
// foo.method = function(){
//      console.log(this.prop);
// };

// foo.method(); // 10

function foo() {}

// 일반적인 함수로서 호출 : [[Call]]이 호출된다.
foo();

// 생성자 함수로서 호출 : [[Construct]]가 호출된다.
new foo();