//--------------------- 스코프  ---------------------------//
function add(x, y){
    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
    console.log(x, y);;
    return x + y;
}

add(2, 5); //2 5

// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
//console.log(x, y); //ReferenceError: x is not defined

// 변수는 코드의 가장 바깥 영역뿐 아니라 코드 블록이나 함수 몸체 내에서도 선언할 수 있다.
// 이때 코드 블록이나 함수는 중첩될 수 있다.
var var1 = 1; //코드의 가장 바깥 영역에서 선언한 변수

if (true){
    var var2 = 2; // 코드 블록 내에서 선언한 변수
    if (true) {
        var var3 = 3; // 중첩된 함수 내에서 선언한 변수
    }
}

function foo(){
    var var4 = 4; // 함수 내에서 선언한 변수
    function bar(){
        var var5 = 5; // 중첩된 함수 내에서 선언한 변수
    }
}

console.log(var1);
console.log(var2);
console.log(var3);
//console.log(var4); //ReferenceError: var4 is not defined
//console.log(var5); // ReferenceError: var5 is not defined

var x = 'global';

function foo(){
    var x = 'local';
    console.log(x); // local
}

foo();

console.log(x); // global