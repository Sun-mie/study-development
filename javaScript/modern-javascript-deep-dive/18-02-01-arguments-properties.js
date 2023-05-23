function multiply(x, y){
    console.log(arguments);
    return x * y;
}

console.log(multiply()); // [Arguments] {} NaN
console.log(multiply(1)); // [Arguments] { '0': 1 } NaN
console.log(multiply(1, 2)); // [Arguments] { '0': 1, '1': 2 } 2
console.log(multiply(1, 2, 3)); // [Arguments] { '0': 1, '1': 2, '2': 3 } 2

// arguments -> symbol
function multifly2(x, y){
    //이터레이터
    const iterator = arguments[Symbol.iterator]();

    //이터레이터의 next 메서드를 호출하여 이터러블 객체 atguments를 순회
    console.log(iterator.next()); // { value: 1, done: false }
    console.log(iterator.next()); // { value: 2, done: false }
    console.log(iterator.next()); //{ value: 3, done: false }
    console.log(iterator.next()); //{ value: undefined, done: true }

    return x*y;
}

multifly2(1, 2, 3);

// arguments 객체는 가변 인자 함수를 구현할 때 유용하다.
// 가변 인자 함수 - 매개변수 개수를 확정할 수 없는 함수
function sum() {
    let res = 0;

    // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수 있다.
    for (let i = 0; i <arguments.length; i++){
        res += arguments[i];
    }
    return res;
}

console.log(sum()); //0
console.log(sum(1, 2)); //3
console.log(sum(1, 2, 3)); //6


function sum2() {
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur){
        return pre + cur;
    }, 0);
}
console.log(sum2(1, 2)); // 3
console.log(sum2(1, 2, 3, 4, 5)); // 15

function sum3(...args){
    return args.reduce((pre, cur) => pre+cur, 0);
}
console.log(sum3(1, 2)); //3
console.log(sum3(1, 2, 3, 4, 5)); //15

