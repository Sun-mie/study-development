//단항 산술 연산자
var x = 5, result;
console.log(x);

result = x++; //선할당 후 증가
console.log(result, x); // 5 6

result = ++x; //선증가 후할당
console.log(result, x); // 7 7

result = x--; //선할당 후감소
console.log(result, x); // 7 6

result = --x; //선감소 후할당
console.log(result, x); // 5 5

+(10) // 10
+(-10) // -10

var x = '1';
console.log(x); // string
console.log(+x); // number

x = true;
console.log(x); // boolean
console.log(+x); // number

x = false;
console.log(x); // boolean
console.log(+x); // number

x = 'Hello';
console.log(x); // string
console.log(+x); // number NaN


console.log(-(-10)); //number 10

console.log(-'10'); //number -10

console.log(-true); //number -1

console.log(-'Hello') //number NaN

//문자열 연결 연산자
console.log('1' + 2); //string 12
console.log(1 + '2'); //string 12

//산술 연산자
console.log(1 + 2) // number 3

//true는 1로 타입 변환된다.
console.log(1 + true); //number 2

// fasle는 0으로 타입 변환된다.
console.log(1 + false); //number 1

// null은 0으로 타입 변환된다.
console.log(1 + null); // number 1

// undefined는 숫자로 변환되지 않는다.
console.log(+undefined); //number NaN
console.log(1+undefined); //number NaN

// 할당 연산자
var x;

x = 10; // x = 10
console.log(x);

x += 5; // x = x+5
console.log(x);

x -= 5; // x = x-5
console.log(x);

x *= 5; // x = x*5
console.log(x);

x /= 5; // x = x/5
console.log(x);

x %= 5; // x = x%5
console.log(x); 

// 문자열 연결 연산자
var str = 'My name is ';
str += 'Sunmie';
console.log(str); // My name is Sunmie


// 할당문은 표현식 문
console.log(x = 10) //10

var a, b, c;

// 연쇄 할당 오른쪽에서 왼쪽으로 진행
a = b = c = 0;
console.log(a,b,c);

console.log(5 == 5); // true
console.log(5 == '5'); // true : 암묵적 타입 변환으로 변환 후 동등하다 처리됨

//동등 비교 연산자는 편리한 경우도 있지만 결과를 예측하기 어렵고 실수하기 쉽다.
console.log('0' == ''); // false
console.log(0 == ''); // true
console.log('0' == 0); //true

console.log( false == 'false'); //false
console.log( false == '0'); //true
console.log(false == null); //false
console.log(false == null); //false
console.log(false == undefined); //false

console.log('----------------------');
//일치 비교 연산자는 예측하기 쉽다.
console.log(5 === 5); //true
console.log(5 === '5'); //false

console.log('----------------------');
//단, NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(NaN === NaN); //false

// 따라서 숫자가 NaN인지 조사하려면 빌트인 함수 Number.isNaN을 사용한다.
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN(10)); //false
console.log(Number.isNaN(1+undefined)); //true

// 양의0과 음의0 비교
console.log(0 === -0); //true
console.log(0 == -0); //true

console.log('----------------------');
// 따라서 양의0과 음의0은 Object.is로 비교한다.
console.log(Object.is(-0, +0)); //fasle
console.log(Object.is(NaN, NaN)); //true

console.log(5 != 8); //true
console.log(5 != 5); //false
console.log(5 != '5'); //false

console.log(5 !== 8); //true
console.log(5 !== 5); //false
console.log(5 !== '5'); //true

console.log('----------------------');
console.log(5 > 0); //true
console.log(5 > 5); //false
console.log(5 >= 5); //true
console.log(5 <= 5); //true


console.log('[삼항 조건 연산자]----------------------');

x = 2;
var result = x % 2? '홀수':'짝수';
console.log(result); //짝수

// 삼항 조건 연산자 표현식은 값처럼 사용할 수 있다.
var x = 10;
var result = x % 2? '홀수' : '짝수';
console.log(result); //짝수

// if...else문은 값처럼 사용할 수 없음.
//var result = if(x % 2) {result = '홀수';} else {result = '짝수';}; // SyntaxError: Unexpected token 'if'

console.log('[논리 연산자]----------------------');

// 논리합 (||) 연산자
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

// 논리곱 (&&) 연산자
console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false
console.log(false && false); //false

// 논리 부정 (!) 연산자
console.log(!true); //false
console.log(!false); //true

// 논리부정연산자는 언제나 불리언 값을 반환한다.
// 피연산자가 불리언 값이 아니면 불리언 타입으로 암묵적 타입 변환된다.
console.log(!0); //true
console.log(false == 0); //true

console.log(false == 'Hello'); //false
console.log(!'Hello'); //false

//논리합 또는 논리곱 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도 있으며,
//언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.
console.log('Cat' && 'Dog'); //Dog


console.log('[쉼표 연산자]----------------------');
var x, y, z;
console.log(x = 1, y = 2, z = 3);

console.log('[그룹 연산자]----------------------');
console.log(10 * 2 + 3); //23
console.log(10 * (2+3)); //50

console.log('[typeof 연산자]----------------------');
console.log(typeof ''); // string
console.log(typeof 1); // number
console.log(typeof NaN); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof new Date()); // object
console.log(typeof /test/gi); // object
console.log(typeof function(){}); // function

//typeof 연산자로 null을 연산해보면 object로 반환한다.
//따라서 null타입인지 확인할 때는 typeof 대신 일치 연산자(===)를 사용한다.
var foo = null;
console.log(typeof foo === null); //false
console.log(foo === null); //true

//선언하지 않은 식별자를 typeof 연산자로 연산해보면 ReferenceError가 발생하지 않고 undefined를 반환한다.
console.log(typeof undeclared); //undefined

console.log('[지수 연산자]----------------------');
console.log(2 ** 2); //4
console.log(2 ** 2.5); //5.65685424949238
console.log(2 ** 0); //1
console.log(2 ** -2); //0.25

// 음수를 거듭제곱의 밑으로 사용해 계산하려면 괄호로 묶어야 한다.
console.log((-5) ** 2); //25

// 지수 연산자가 도입되기 전에는 Math.pow 메서드를 사용했다.
console.log(Math.pow(2, 2)); //4
console.log(Math.pow(2, 2.5)); //5.65685424949238
console.log(Math.pow(2, 0)); //1
console.log(Math.pow(2, -2)); //0.25

// 지수 연산자의 할당 연산자
var num = 5;
num **= 2;
console.log(num); //25

// 지수 연산자의 우선순위
console.log(2 * 5 ** 2); // =50 (1)5**2 (2)25*2

console.log('[연산자 의 부수 효과]]----------------------');
var v;

//할당 연산자 - 변수 값이 변하는 부수 효과가 있음
v = 1;
console.log(v); //1

//증가/감소 연산자 - 피연산자의 값을 변경하는 부소 효과가 있다.
v++;
console.log(v); //2

//delete 연산자 - 객체의 프로퍼티를 삭제하는 부수 효과가 있다.
var o = {a:1};
console.log(o); //{ a: 1 }
delete o.a;
console.log(o); //{}

