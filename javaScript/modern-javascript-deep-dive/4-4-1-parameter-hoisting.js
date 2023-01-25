// undefined가 출력되는 이유
// 소스 코드가 한 줄 씩 순차적으로 실행되는 시점, 즉 런타임이 아니라 그 이전 단계에서 먼저 실행되기 떄문
// 자바스크립트 엔진은 소스코드를 한 줄씩 순차적으로 시행하기 앞서 먼저 소스코드의 평과 과정을거치면서 소스코드를 실행하기 위한 준비를 한다.
// 소스코드의 평고 과정이 끝나면 비로소 변수 선언을 포함한 모든 선언문을 제외하고 소스코드를 한 줄씩 순차적으로 실행한다.

console.log(score);
 score=80;
var score;

// score = 10;
console.log(score);

// 위의 경우 var를 먼저 읽고 log 출력을해서 처음에 undefined가 떳다가 score=80로 값을 주어서 80이 뜸

