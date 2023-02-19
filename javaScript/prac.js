// let map = {
//     // first: 1,
//     // second: 2,
//     // third: 3
// }
// let map = ' ';

// // console.log(Object.keys(map));

// // string 공백 입력 후 trim을 했을 경우 값은 ''지만 true로 인식.
// if(map.trim() === ''){
//     return console.log('공백임');
// }else if(!map){ // null, undefined, ''
//     return console.log('값 없음');
// }

// let result1 = null; //false
// if(result1){ 
//     return console.log('true'); 
// }else{
//     return console.log('false');
// }

// let result2; // undefined false
// if(result2){ 
//     return console.log('true'); 
// }else{
//     return console.log('false');
// }

// let result3 = false; //false
// if(result3){ 
//     return console.log('true'); 
// }else{
//     return console.log('false');
// }

// let result4 = 0; //false
// if(result4){ 
//     return console.log('true'); 
// }else{
//     return console.log('false');
// }

// let result5 = -0; //false
// if(result5){ 
//     return console.log('true'); 
// }else{
//     return console.log('false');
// }

let result = {
    1: false,
    2: undefined,
    3: null,
    4: 0,
    5: -0,
    6: NaN,
    7: '',
    8: ' '
}

// for(let v of result){
//     console.log(v);
// }

console.log(result.getOwn);