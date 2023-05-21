//--------------------- 타입 변환 ---------------------------//

console.log('\n[명시적 타입 변환 or 타입 캐스팅]');
var x = 10;
var str = x.toString(); //명시적 타입 변환
console.log(typeof str, str);
console.log(typeof x, x);

console.log('\n[암묵적 타입 변환 or 타입 강제 변환]');
var x = 10;
var str = x + '';
console.log(typeof str, str); //암묵적 타입 변환
console.log(typeof x, x);

// 피연산자가 모두 문자열 타입이어야 하는 문맥
console.log(typeof ('10'+2), '10'+2);
// 피연산자가 모두 숫자 타입이어야 하는 문맥
console.log(typeof (5*'10'), 5*'10');
// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
console.log(typeof (!0), !0);
if (1){
    console.log('true');
}

//------------------암묵적 타입 변환----------------------//
console.log('\n[암묵적 타입 변환 - 문자열 타입으로 변환]');
console.log(typeof (1+'2'), 1+'2'); //string 12
//템플릿 리터럴의 표현식 삽입
console.log(typeof (`1+1 = ${1+1}`), `1+1 = ${1+1}`); //string 1+1 = 2

// Number → String
console.log(typeof (0+''), 0+''); //string 0
console.log(typeof (-0+''), -0+''); //string 0
console.log(typeof (1+''), 1+''); //string 1
console.log(typeof (NaN+''), NaN+''); //string NaN
console.log(typeof (Infinity+''), Infinity+''); //양의무한대(10/0) string Infinity
console.log(typeof ((10/0)+''), (10/0)+''); //string Infinity
console.log(typeof (-Infinity+''), -Infinity+''); //음의무한대 (10/-0) string -Infinity
console.log(typeof ((10/-0)+''), (10/-0)+''); //string -Infinity

// Boolean → String
console.log(typeof (true+''), true+''); //string true
console.log(typeof (false+''), false+''); //string false

// null → String
console.log(typeof (null+''), null+''); //string null

// undefined → String
console.log(typeof (undefined +''), undefined +''); //string undefined

// Symbol → String
// console.log((Symbol())+''); // TypeError: Cannot convert a Symbol value to a string

// Object → String
console.log(typeof ({}+''), ({}+'')); //string [object Object]
console.log(typeof (Math+''), Math+''); //string [object Math]
console.log(typeof ([]+''), []+''); //string 
console.log(typeof ([10,20]+''), [10,20]+''); //string 10,20
console.log(typeof (function(){}+''), (function(){})+''); //string function(){}
console.log(typeof (Array+''), Array+''); //string function Array() { [native code] }


console.log('\n[암묵적 타입 변환 - 숫자 타입으로 변환]');
console.log(typeof (1-'1'), 1-'1'); //number 0
console.log(typeof (1*'10'), 1*'10'); //number 10
console.log(typeof (1/'one'), 1/'one'); //number NaN

console.log(typeof ('1' > 0), '1' > 0); //boolean true

// String → Number
console.log(typeof (+0), +0); //number 0
console.log(typeof (+'0'), +'0'); //number 0
console.log(typeof (+'1'), +'1'); //number 1
console.log(typeof (+'String'), +'String'); //number NaN

// Boolean → Number
console.log(typeof (+true), +true); //number 1
console.log(typeof (+false), +false); //number 0

// Null → Number
console.log(typeof (+null), +null); //number 0

// undeefined → Number
console.log(typeof (+undefined), +undefined); //number NaN

// Symbol → Number
// console.log(+Symbol()); //TypeError: Cannot convert a Symbol value to a number

// Object → Number
console.log(typeof (+{}), +{}); //number NaN
console.log(typeof (+[]), +[]); //number 0
console.log(typeof (+[10, 20]), +[10, 20]); //number NaN
console.log(typeof (+(function(){})), +(function(){})); //number NaN



console.log('\n[암묵적 타입 변환 - 불리언 타입으로 변환]');
if('') console.log('1');
if(true) console.log('2'); //출력
if(0) console.log('3');
if('str') console.log('4'); //출력
if('text') console.log('5'); //출력
if(null) console.log('6');

// false로 평가되는 Falsy 값
if(!false) console.log(false+' is falsy value');
if(!undefined) console.log(undefined+' is falsy value');
if(!null) console.log(null+' is falsy value');
if(!0) console.log(0+' is falsy value');
if(!NaN) console.log(NaN+' is falsy value');
if(!'') console.log(''+' is falsy value');

// Truthy or Falsy 값을 판별하는 함수
// 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v){
    return !v;
}

// 모두 true를 반환한다.
console.log(isFalsy(false));
console.log(isFalsy(undefined));
console.log(isFalsy(null));
console.log(isFalsy(0));
console.log(isFalsy(NaN));
console.log(isFalsy(''));

// 전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
function isTruthy(v){
    return !!v;
}

// 모두 true를 반환한다.
console.log(isTruthy(true));
console.log(isTruthy('0')); //빈 문자열이 아닌 문자열은 Truthy 값이다.
console.log(isTruthy({}));
console.log(isTruthy([]));


//------------------명시적 타입 변환----------------------//
console.log('\n[명시적 타입 변환 - 문자열 타입으로 변환]');
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// Number -> String
console.log(typeof String(1), String(1)); //string 1
console.log(typeof String(NaN), String(NaN)); //string NaN
console.log(typeof String(Infinity), String(Infinity)); //string Infinity

// Boolean -> String
console.log(typeof String(true), String(true)); //string true
console.log(typeof String(false), String(false)); //string false

// 2. Object.prototype.toString 메서드를 사용하는 방법
// Number -> String
console.log(typeof (1).toString(), (1).toString()); //string 1
console.log(typeof (NaN).toString(), (NaN).toString()); //string NaN
console.log(typeof (Infinity).toString(), (Infinity).toString()); //string Infinity

// Boolean -> String
console.log(typeof (true).toString(), (true).toString()); //string true
console.log(typeof (false).toString(), (false).toString()); //string false

// 3. 문자열 연결 연산자를 이용하는 방법
// Number -> String
console.log(typeof (1+''), 1+''); //string 1
console.log(typeof (NaN+''), NaN+''); //string NaN
console.log(typeof (Infinity+''), Infinity+''); //string Infinity

// Boolean -> String
console.log(typeof (true+''), true+''); //string true
console.log(typeof (false+''), false+''); //string false



console.log('\n[명시적 타입 변환 - 숫자 타입으로 변환]');
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// String -> Number
console.log(typeof Number('0'), Number('0')); //number 0
console.log(typeof Number('-1'), Number('-1')); //number -1
console.log(typeof Number(10.53), Number(10.53)); //number 10.53

// Boolean -> Number
console.log(typeof Number(true), Number(true)); //number 1
console.log(typeof Number(false), Number(false)); //number 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// String -> Number
console.log(typeof parseInt('0'), parseInt('0')); //number 0
console.log(typeof parseInt('-1'), parseInt('-1')); //number -1
console.log(typeof parseFloat('10.53'), parseFloat('10.53')); //number 10.53

// 3. +단항 산술 연산자를 이용하는 방법
// String -> Number
console.log(typeof (+'0'), +'0'); //number 0
console.log(typeof (+'-1'), +'-1'); //number -1
console.log(typeof (+'10.53'), +'10.53'); //number 10.53

// Boolean -> Number
console.log(typeof (+true), +true); //number 1
console.log(typeof (+false), +false); //number 0

// 4. *산술 연산자를 이용하는 방법
// String -> Number
console.log(typeof ('0'*1), '0'*1); //number 0
console.log(typeof ('-1'*1), '-1'*1); //number -1
console.log(typeof ('10.53'*1), '10.53'*1); //number 10.53

// Boolean -> Number
console.log(typeof (true*1), true*1); //number 1
console.log(typeof (false*1), false*1); //number 0

console.log('\n[명시적 타입 변환 - 불리언 타입으로 변환]');
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// String -> Boolean
console.log(typeof Boolean('x'), Boolean('x')); //boolean true
console.log(typeof Boolean(''), Boolean('')); //boolean false
console.log(typeof Boolean('false'), Boolean('false')); //boolean true

// Number -> Boolean
console.log(typeof Boolean(0), Boolean(0)); //boolean false
console.log(typeof Boolean(1), Boolean(1)); //boolean true
console.log(typeof Boolean(NaN), Boolean(NaN)); //boolean false
console.log(typeof Boolean(Infinity), Boolean(Infinity)); //boolean true
console.log(typeof Boolean(-Infinity), Boolean(-Infinity)); //boolean true

// null -> Boolean
console.log(typeof Boolean(null), Boolean(null)); //boolean false

// undefined -> boolean
console.log(typeof Boolean(undefined), Boolean(undefined)); //boolean false

// obejct -> boolean
console.log(typeof Boolean({}), Boolean({})); //boolean true
console.log(typeof Boolean([]), Boolean([])); //boolean true

//2. ! 부정 논리 연산자를 두 번 사용하는 방법
// String -> boolean
console.log(typeof !!'x', !!'x'); //boolean true
console.log(typeof !!'', !!''); //boolean false
console.log(typeof !!'false', !!'false'); //boolean true

// Number -> boolean
console.log(typeof !!0, !!0); //boolean false
console.log(typeof !!1, !!1); //boolean true
console.log(typeof !!NaN, !!NaN); //boolean false
console.log(typeof !!Infinity, !!Infinity); //boolean true
console.log(typeof !!-Infinity, !!-Infinity); //boolean true

// null -> boolean
console.log(typeof !!null, !!null); //boolean false

// undefined -> boolean
console.log(typeof !!undefined, !!undefined); //boolean false

// object -> boolean
console.log(typeof !!{}, !!{}); //boolean true
console.log(typeof !![], !![]); //boolean true



//------------------단축 평가----------------------//
console.log('\n[단축 평가 - 논리 연산자를 사용한 단축 평가]');
// 논리합(||)연산자
console.log('Cat' || 'Dog'); //Cat
console.log(false || 'Dog'); //Dog
console.log('Cat' || false); //Cat

// 논리곱(&&)연산자
console.log('Cat' && 'Dog'); //Dog
console.log(false && 'Dog'); //false
console.log('Cat' && false); //false

// [조건이 Truthy일 때 논리곱(&&) 연산자 표현식으로 if문을 대체]
var done = true;
var message ='';

// 주어진 조건이 true일 때
if(done) message ='완료';

// if문은 단축 평가로 대체 가능하다.
// done이 true라면 message에 '완료'를 할당
message = done && '완료';
console.log(message); //완료

// [조건이 Falsy 값일 때는 논리합(||) 연산자 표현식으로 if문을 대체]
var done = false;
var message = '';

// 주어진 조건이 false일 때
if(!done) message ='미완료';

// if문은 단축 평가로 대체 가능하다.
// done이 false라면 message에 '미완료'를 할당
message = done || '미완료';
console.log(message); //미완료


// [삼항 조건 연산자를 if…else문으로 대체]
var done = true;
var message = '';

// if ...else 문
if(done) message = '완료';
else message = '미완료';
console.log(message);

// if ...else 문은 삼항 조건 연산자로 대체 가능하다.
message = done? '완료' : '미완료';
console.log(message);


console.log('\n[단축 평가 - 단축 평가가 유용하게 사용되는 경우]');
// 1. 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
var elem = null;
// var value = elem.value; //TypeError: Cannot read property 'value' of null

// 이때 단축 평가를 사용하면 에러를 발생시키지 않는다.
// elem이 null/undefined와 같은 Falsy값이면 elem으로 평가되고 Truthy 값이면 elem.value로 평가된다.
var elem = null;
var value = elem && elem.value; //null
console.log(value);

// 2. 함수 매개변수에 기본값을 설정할 때
function getStringLength(str){
    str = str || '';
    return str.length;
}
console.log(getStringLength()); //0
console.log(getStringLength('Hi')); //2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = ''){ // default 설정
    return str.length;
}
console.log(getStringLength()); //0
console.log(getStringLength('Hi')); //2


console.log('\n[단축 평가 - 옵셔널 체이닝 연산자]');

// elem이 null 또는 undefined이면 undefined를 반환하고,
// 그렇지 않으면 우향의 프로퍼티 참조를 이어간다.
var elem = null;
var value = elem?.value;
console.log(value); //undefined

var elem = null;
var value = 'value';
elem?.value;
console.log(value); //'value'

// 옵셔널 체인지가 도입되기 이전 논리 연산자를 사용한 방법
// 논리연산자(&&)는 좌항 피연산자가 false로 평가되는 Falsy값 이면 좌항 피연산자를 그대로 반환한다.
var elem = null;
var value = elem && elem.value;
console.log(value); //null


// 논리곱연산자와 옵셔널체이닝 연산자의 참조 방식 비교
var str = '';
var length = str && str.length;
console.log(length); //''

var str = '';
var length = str?.length;
console.log(length); //0

var str = null;
var length = str?.length;
console.log(length); //undefined

console.log('\n[단축 평가 - null 병합 연산자]');
// 좌항의 피연산자가 null 또는 undefined이면 우항의 피연산자를 반환
// 그렇지 않으면 좌항의 피연산자를 반환
var foo = null ?? 'default string';
console.log(foo); //default string


// Falsy 값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
var foo =''||'default string';
console.log(foo); //default string

// 좌항의 피연산자가 Falsy 값이라도 null 또는 undefined가 아니면 좌항의 피연산자를 반환
var foo = '' ?? 'defulat string';
console.log(foo); //''

// null 병합 연산자를 이용한 기본값
var str = null;
var foo = str ?? 'default string';
console.log(foo); //default string