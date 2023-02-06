//--------------------- 전역 변수의 문제점  ---------------------------//
//--------------------- 전역 변수의 문제점 : 지역 변수의 생명 주기  ---------------------------//
// function foo(){
//     var x = 'local';
//     console.log(x);
//     return x;
// }

// foo();
//console.log(x); //ReferenceError: x is not defined

var x = 'global';

function foo(){
    console.log(x);  //undefined
    var x = 'local';
}

foo();
console.log(x); //global

//--------------------- 전역 변수의 문제점 : 전역 변수의 생명 주기  ---------------------------//

var x = 'global';

function foo(){
    var x = 'local';
    console.log(x);
    return x;
}

foo();
console.log(x);

//--------------------- 전역 변수의 문제점 : 전역 변수의 문제점 ---------------------------//
// 변수 이름이 중복되면 의도치 않은 재할당이 이뤄진다.
var x = 1;

// ...

// 변수의 중복 선언 기존 변수에 값을 재할당한다.
var x = 100;
console.log(x);

//--------------------- 전역 변수의 문제점 : 전역 변수의 사용을 억제하는 방법 ---------------------------//
//1. 즉시 실행 함수
(function (){
    var foo = 10;
    // ...
}());
console.log(foo);

//2. 네임스페이스 객체
//2-1
var MYAPP = {};
MYAPP.name = 'Lee';
console.log(MYAPP.name); //Lee

//2-2
var MYAPP = {};
MYAPP.person={
    name: 'Jo',
    address: 'Seoul'
};
console.log(MYAPP.person.name); //Jo

//3. 모듈 패턴
//ES5이하 모듈
var Counter = (function(){
    //private 변수
    var num = 0;

    //외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환
    return {
        increase(){
        return ++num;
        },
        decrease(){
        return --num;
        }
    };
}());

//private 변수는 외부로 노출되지 않는다.
console.log(Counter.num); //undefined
console.log(Counter.increase()); //1
console.log(Counter.increase()); //2
console.log(Counter.decrease()); //1
console.log(Counter.decrease()); //0

//ES6 이상 모듈
{/* <script type="module" src="lib.mjs"></script>
<script type="module" src="app.mjs"></script> */}

