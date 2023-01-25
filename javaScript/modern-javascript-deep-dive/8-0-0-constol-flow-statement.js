// /* 블록문 */
// //블록문
// {
//     var foo = 10;
// }

// //제어문
// var s = 1;
// if(x <10) {
//     x++;
// }

// //함수 선언문
// function sum(a,b){
//     return a+b;
// }


// /* 조건문 */
// //if … else 문
// if(조건식){
//     // 조건식이 true이면 이 코드 블록이 실행
// }else{
//     // 조건식이 false이면 이 코드 블록이 실행
// }

// //else if 조건식을 추가하여 코드 블록을 늘리고 싶은 경우 사용
// if(조건식1){
//     // 조건식1이 true이면 이 코드 블록이 실행
// }else if (조건식2){
//     // 조건식2가 true이면 이 코드 블록이 실행
// }else{
//     // 조건식1,2가 모두 거짓이면 이 코드 블록 실행
// }

//else if 문과 sles문은 옵션이다. 사용할 수도 사용하지 않을 수도 있다.
var num =2;
var kind;

if (num > 0){
    kind = '양수';
}
console.log(kind); //양수

// 코드 블록 내 문이 하나인 경우 중괄호를 생략할 수 있다.
num = -2;
if(num>0) kind='양수';
else if(num<0) kind='음수';
else    kind='영';
console.log(kind); //음수

// 삼항 조건 연산자로 바꿔쓸 수도 있다.
num = -2;
var kind = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(kind); //음수


/* switch문 */
// switch(표현식){
//     case 표현식1:
//         switch문의 표현식과 표현식1이 일치하면 실행될 문;
//         break;
//     case 표현식2:
//         switch문의 표현식과 표현식2이 일치하면 실행될 문;
//         break;
//     default:
//         switch문의 표현식과 일치하나 case의 표현식과 일치하지 않을 때 실행될 문;
// }

//월을 영어로 변환
var month = 11;
var monthName;

// 폴스루 
switch(month){
    case 1: monthName = 'January';
    case 2: monthName = 'February';
    case 3: monthName = 'Match';
    case 4: monthName = 'Aprill';
    case 5: monthName = 'May';
    case 6: monthName = 'June';
    case 7: monthName = 'July';
    case 8: monthName = 'August';
    case 9: monthName = 'September';
    case 10: monthName = 'October';
    case 11: monthName = 'November';
    case 12: monthName = 'December';
    default: monthName = 'Invalid month';
}
console.log(monthName); //Invalid month

// 올바른 switch문
switch(month){
    case 1: monthName = 'January';
        break;
    case 2: monthName = 'February';
     break;
    case 3: monthName = 'Match';
        break;
    case 4: monthName = 'Aprill';
     break;
    case 5: monthName = 'May';
      break;
    case 6: monthName = 'June';
       break;
    case 7: monthName = 'July';
      break;
    case 8: monthName = 'August';
      break;
    case 9: monthName = 'September';
      break;
    case 10: monthName = 'October';
      break;
    case 11: monthName = 'November';
      break;
    case 12: monthName = 'December';
      break;
    default: monthName = 'Invalid month';
}
console.log(monthName); //November

// 폴스루가 유용한 경우 (ex: 윤년인지 판별하여 2월의 일수를 계산)
var year = 2020;
var month = 2;
var days = 0;

switch(month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
    case 2:
        // 윤년 계산 알고리즘
        // 1) 연도가 4로 나누어 떨어지는 해는 윤년
        // 2) 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어떨어지는 해는 평년
        // 3) 연도가 400으로 나누어떨어지는 해는 윤년
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invalid month');
}
console.log(days); //29

/* 반복문 */
//for문
for(var i =0; i <2; i++){
    console.log(i); // 0 1
}

for (var i =1; i >=0; i--){
    console.log(i); // 1 0
}

// // 무한루프
// for( ;; ){
//     ...
// }

// 중첩 for 문
// 두 개의 주사위를 전졌을 때 두 눈의 합이 6이 되는 모든 경우의 수 출력
for(var i=1; i<=6; i++){
    for(var j=1; j<=6; j++){
        if(i+j === 6) console.log(`[${i}, ${j}]`); // [1, 5] [2, 4] [3, 3] [4, 2] [5, 1]
    }
}

//while 문
// while(조건식){
//     조건식이 참인 경우 반복 실행될 문;
// }
// //무한루프
// while(true){...}

//if문을 이용해 while문 탈출
var count = 0;

while(true){
    console.log(count);
    count++;
    if(count === 3) break;
} //0 1 2

//do...while문
// do{
//     처음 실행 및 조건식이 참인 경우 반복 실행될 문;
// } while(조건식);

var count = -1;
do{
    console.log(count);
    count++;
} while (count<0); // -1

//break문
//foo라는 식별자가 붙은 레이블 블록문
// foo:{
//     console.log(1);
//     break(foo);
//     console.log(2);
// }
// console.log('Done');

// 중첩된 for문의 내부 for문에서 break 문을 실행하면 내부 for 문을 탈출하여 외부 for 문으로 진입한다.
// // 내부 for 문이 아닌 외부 for문을 탈출하려면 레이블 문을 사용한다.
// outer: for (var i=0; i<5; i++){
//     for (var j=0; j<5; j++){
//         if(i+j === 3)break outer;
//         console.log(`inner [${i}, ${j}]`);
//     }
// } //inner [0, 0] [0, 1] [0, 2]


// outer: for (var i=0; i<5; i++){
//     for (var j=0; j<5; j++){
//         if(i+j === 3)break;
//         console.log(`inner [${i}, ${j}]`);
//     }
// } // inner [0, 0] [0, 1] [0, 2] [1, 0] [1, 1] [2, 0] [4, 0] [4, 1] [4, 2] [4, 3] [4, 4]

var string = 'Hello World.';
var search = 'l';
var index;

for (var i=0; i<string.length; i++){
    if(string[i] === search){
        index = i;
        break;
    }
}
console.log(index); //2

//String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search));


/* continue 문 */
var string = 'Hello World.';
var search = 'l';
var count = 0;

//문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for (var i =0; i<string.length; i++){
    console.log('i='+i);
    //'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동
    //'l'이면 count++ 실행
    if (string[i] !== search) continue;
    count++; //continue 문이 실행되면 이 문은 실행되지 않는다.
    console.log('count='+count);
}
console.log(count); //3

//String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length);

var string = 'Hello World.';
var search = 'l';
var count = 0;
for (var i=0; i<string.length; i++){
    if (string[i] === search) count++;
}
console.log(count); //3

//continue 문을 사용하지 않으면 if문 내에 코드를 작성해야 한다.
for (var i=0; i<string.length; i++){
    if (string[i] === search){
        count++;
        // code
        // code
        // code
    }
}

//continue 문을 사용하면 if문 밖에 코드를 작성할 수 있다.
for (var i=0; i<string.length; i++){
    if (string[i] !== search) continue;
        count++;
        // code
        // code
        // code
}

