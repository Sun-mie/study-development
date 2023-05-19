//생성자 함수
function Circle(radius){
    //이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined다.
    if(!new.target){
        //new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    }
}

//new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter()); //10


//Scope-Safe Constructor Pattern
function Circle2(radius) {
    // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성하고
    // this에 바인딩한다. 이때 this와 Circle2는 프로토타입에 의해 연결된다.

    // 이 함수가 new 연산자와 함께 호출되지 않았다면 이 시점의 this는 전역 객체 window를 가리킨다.
    // 즉, this와 Circle은 프로토타입에 의해 연결되지 않는다.
    if(!(this instanceof Circle2)){
        // new 연산자와 함께 호출하여 생성된 인스턴스를 반환한다.
        return new Circle2(radius);
    }

    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2  * this.radius;
    }
}

// new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출된다.
const circle2 = Circle2(5);
console.log(circle.getDiameter()); //10

let obj = new Object();
console.log(obj); //{}

obj = Object();
console.log(obj) //{}

let f = new Function('x', 'return x ** x');
console.log(f); // anonymous(x) {return x ** x}

f = Function('x', 'return x ** x');
console.log(f) // anonymous(x) {return x ** x}


const str = String(123);
console.log(str, typeof str); //123 string

const num = Number('123');
console.log(num, typeof num); //123 number

const bool = Boolean('true');
console.log(bool, typeof bool); //true boolean