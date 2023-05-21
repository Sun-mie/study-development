//--------------------- 원시 값 - 변경 불가능한 값 ---------------------------//
// const 키워드를 사용한 변수는 재할당이 금지된다.
// 상수는 재할당이 금지된 변수일 뿐 변경 불가능한것과 개념이 다름
const o ={};

//const 키워드를 사용해 선언한 변수에 할당한 원시 값은 변경할 수 없지만
//const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
o.a = 1;
console.log(o); //{ a: 1 }

var str = 'Hello';
str = 'world';


//--------------------- 원시 값 - 문자열과 불변성 ---------------------------//
var str = 'string';

//문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
// console.log(str[0]); //s

//원시 값인 문자열이 객체처럼 동작한다.
// console.log(str.length); //6
// console.log(str.toUpperCase()); //STRING

str[0] = 'S';
console.log(str); //string



//--------------------- 원시 값 - 값에 의한 전달 ---------------------------//
var score = 80;
var copy = score;

console.log(score); // 80
console.log(copy); // 80

console.log(score, copy); //80 80
console.log(score === copy); //true

score = 100;

console.log(score); // 100
console.log(copy); // 80

console.log(score, copy); //100 80
console.log(score === copy); // false


//--------------------- 객체 - 변경 가능한 값 ---------------------------//
var person = {  //person변수에 객체 메모리 주소 값(참조값)이 담긴다.
    name: 'Jo' // 별도의 메모리에 프로퍼티 값이 담겨잇음
}

console.log(person); //person 변수에 저장 되어있는 참조 값으로 식제 객체에 접근

// 프로퍼티 값 갱신
person.name = 'sun-mie';

// 프로퍼티 동적 생성
person.address = 'Seoul';

console.log(person); //{ name: 'sun-mie', address: 'Seoul' }


//--------------------- 객체 - 얕은 복사 깊은 복사 ---------------------------//
// const obj = { x: {y:1} };

// //얕은 복사
// const c1 = { ...obj }; // 35. 스프레드 문법 참고
// console.log(c1); //{ x: { y: 1 } }
// console.log(c1 === obj); //false
// console.log(c1.x === obj.x); //true

// // lodash의 cloneDeep을 사용한 깊은 복사
// // "npm install lodash"로 lodash를 설치한 후 Node.js 환경에서 실행
// const _ = require('lodash');

// //깊은 복사
// const c2 = _.cloneDeep(obj);
// console.log(c2 === obj); //false
// console.log(c2.x === obj.x); //false

const v = 1;
// 깊은 복사라고 불리는 경우 : 원시 값 복사
const v1 = v;
console.log(v1 === v); //true

const b = { x:1 };
// 얕은 복사라고 불리는 경우 : 참조 값 복사
const v2 = b;
console.log(v2 === b); //true


//--------------------- 객체 - 참조에 의한 전달 ---------------------------//
var person = {
    name: 'Jo'
}

// 참조 값을 복사 (얕은 복사)
var copy = person;

// copy와 person은 동일한 객체를 참조한다.
console.log(copy === person); //true

copy.name = 'Sunmie';
person.address = 'Seoul';

console.log(person); //{ name: 'Sunmie', address: 'Seoul' }
console.log(copy); //{ name: 'Sunmie', address: 'Seoul' }


var person1 = {
    name: 'Jo'
}

var person2 = {
    name: 'Jo'
}

console.log(person1 === person2); //false
console.log(person1.name === person2.name); //true
