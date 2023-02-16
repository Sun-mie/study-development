import React, { useState } from 'react';

function Counter(){
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    const onIncrease = () => {
        // setNumber(number +1);
        setNumber(prevNumber => prevNumber +1);
    }
    const onDecrease = () =>{
        // setNumber(number -1);
        setNumber(prevNumber => prevNumber -1);
    }
    const onClick = () => {
        setCount(count +1);
        setCount(count +1);
        console.dir(count);
    }
    // const onClick = () => {
    //     setCount(count => count +1);
    //     setCount(count => count +1);
    //     console.dir(count);
    // }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button> {/*리액트에서 엘리먼트에 이벤트를 설정해줄때에는 on이벤트이름={실행하고싶은함수} 형태로 설정*/}
            <button onClick={onDecrease}>-1</button>
            <button onClick={onClick}>test</button>
        </div>
    );
}

export default Counter;