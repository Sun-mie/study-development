//--------------------- 객체란 ---------------------------//
var counter = {
    num : 0, //프로퍼티
    increase: function(){ //메서드
        this.num++;
    }
}



//--------------------- 객체 리터럴에 의한 객체 생성 ---------------------------//
var person = {
    name: 'Jo',
    sayHello: function(){
        console.log(`Hello Myname is ${this.name}`);
    }
};

console.log(typeof person); //object
console.log(person); //{ name: 'Jo', sayHello: [Function: sayHello] }

//중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체가 생성된다.
var empty = {} //빈 객체
console.log(typeof empty); //object



//--------------------- 프로퍼티 ---------------------------//
var person = {
    name: 'Jo', //프로퍼티 키는 name, 프로퍼티 값은 'Jo'
    age: 30 //프로퍼티 키는 age, 프로퍼티 값은 30
};



//--------------------- 프로퍼티 키 ---------------------------//
var person = {
    firstName: 'Sun-mie', //식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name': 'Jo' // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
};
console.log(person);

var foo ={
    '':'' //빈 문자열도 프로퍼티 키로 사용할 수 있다.
};
console.log(foo); //{ '': '' }

//프로퍼티 키 동적 생성
var obj={};
var key='hello';

obj[key] = 'world'; //계산된 프로퍼티 이름 var boj = {[key]: 'world'};
console.log(obj);


// 존재하는 프로퍼티 키 중복 선언
var foo = {
    name: 'Jo',
    name: 'Yoon'
};
console.log(foo); //{ name: 'Yoon' }



//--------------------- 메서드 ---------------------------//
var circle = {
    radius: 5, //프로퍼티
    getDiameter: function(){ //메서드
        return 2* this.radius; // this는 circle을 가리킨다.
    }
};
console.log(circle.getDiameter()); //10


//--------------------- 프로퍼티 접근 ---------------------------//
var person = {
    name: 'Jo',
    12123: 12123
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Jo

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']); //Jo

// 대괄호 표기법 내 프로퍼티 키를 따옴표로 감싸지 않은 경우
// console.log(person[name]); //ReferenceError: name is not defined

console.log(person['lastname']); //undefined
// console.log(pserson[12123]);

console.log(`\n naming 규칙`);
var person = {
    'last-name' : 'Jo',
    1: 10
};

//pserson.'last-name'; //SyntaxError: Unexpected string
//person.last-name; //브라우저환경 : NaN , Node.js환경: ReferenceError: name is not defined

//person[last-name]; //ReferenceError: last is not defined
person['last-name']; //Jo

//프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
// person.1  //SyntaxError: Unexpected number
// person.'1' // SyntaxError: Unexpected string
// person[1] // 10 : person[1] -> person['1']
// person['1'] // 10



//--------------------- 프로퍼티 값 갱신 ---------------------------//
var person = {
    name:'Jo'
};
person.name = 'Sun-mie';
console.log(person); //{ name: 'Sun-mie' }


//--------------------- 프로퍼티 동적 생성 ---------------------------//
var person = {
    name: 'Jo'
};

person.age = 30;
console.log(person); //{ name: 'Jo', age: 30 }


//--------------------- 프로퍼티 삭제 ---------------------------//
var person = {
    name: 'Jo'
};
person.age = 30;

delete person.age; // 존재하는 프로퍼티 삭제

delete person.address; // 없는 프로퍼티를 삭제하려는 경우 에러없이 무시된다.

console.log(person); //{ name: 'Jo' }


//--------------------- ES6에서 추가된 객체 리터럴의 확장 기능 ---------------------------//
//프로퍼티 축약 표현을 하지 않은 경우
var x = 1, y = 2;

var obj={
    x: x,
    y: y
};
console.log(obj); //{ x: 1, y: 2 }

//프로퍼티 축약 표현
var obj = {x, y};
console.log(obj); //{ x: 1, y: 2 }
 
//계산된 프로퍼티 이름
//ES5
var prefix = 'prop';
var i = 0;
var obj = {};

obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); //{ 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }

//ES6
var prefix = 'prop';
var i = 0;

var obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i
};
console.log(obj); //{ 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }

//메서드 축약 표현
//ES5
var obj = { 
    name: 'Jo',
    sayHi: function(){
        console.log('Hi!' + this.name);
    }
};
obj.sayHi(); //Hi!Jo

//ES6
const objb = {
    name: 'Jo',
    sayHi() {
        console.log('Hi' + this.name);
    }
};
objb.sayHi(); //HiJo

