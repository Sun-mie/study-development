//--------------------- 함수 ---------------------------//

//함수 - 함수 생성 방법
//1. 함수 선언문
function add(x, y){
    return x + y;
}

var result = add(2, 5); // 함수호출
console.log(result); // 반환값 7

// 변수에 함수 리터럴 할당
var f = function add(x,y){
    return x + y;
}

//--------------------- 함수 - 함수 정의 ---------------------------//
// 1. 함수 선언문
function add(x, y){
    return x + y;
};

// 2. 함수 표현식
var sum = function (x,y) {
    return x + y;
};

// 3. function 생성자 함수
var sum = new Function('x', 'y', 'return x + y');

// 4. 화살표 함수 (ES6)
var sum = (x, y) => x + y;

console.log(sum(2,5));

// console.dir은 함수 객체의 프로퍼티까지 출력한다.
// 단 Node.js에서는 console.log와 같은 결과가 출력된다.
console.dir(sum);  //f sum(x,y)

// 함수 선언문은 표현식이 아닌 문이므로 변수에 할당할 수 없다.
// 하지만 함수 선언문이 변수에 할당되는 것처럼 보인다.
var adds = function add (x, y){
    return x + y;
};

console.log(adds(2,5)); //7

// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서는 함수 이름을 생략할 수 없다.
function foo() {console.log('foo');};
foo();

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.
// (function bar() {console.log('bar');});
// bar(); //ReferenceError: bar is not defined

// 그룹 연산자의 피연산자는 값으로 평가될 수 있는 표현식이어햐 한다.
// 따라서 표현식이 아닌 문의 함수 선언문을 피연산자로 사용할 수 없다.


//--------------------- 함수 - 함수 리터럴의 내부 동작 차이 ---------------------------//
// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서는 함수 이름을 생략할 수 없다.
function foo() {console.log('foo');}

if(1){
    console.log('true');
}


// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.
(function () {console.log('bar');});
// bar(); //ReferenceError: bar is not defined

var add = function add(x, y){
    return x + y ;
};
console.log(add(2,5));


//--------------------- 함수 - 함수 표현식 ---------------------------//