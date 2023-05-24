function foo() {}
console.log(foo.length); // 0

function bar(x) {
    return x;
}
console.log(bar.length); //1

function baz(x, y) {
    return x * y;
}
console.log(baz.length); //2

//arguments 객체의 length 프로퍼티와 함수 객체의 length 프로퍼티의 값은 다를 수 있으므로 주의해야 한다.
// arguments 객체의 length 프로퍼티는 인자의 개수를 가리키고, 함수 객체의 length 프로퍼티는 매개변수의 개수를 가리킨다.