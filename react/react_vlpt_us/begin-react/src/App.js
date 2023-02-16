import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'sunmie',
      email: 'ssunm2@kakao.com'
    },
    {
      id: 2,
      username: 'test1',
      email: 'test1@test.com'
    },
    {
      id: 3,
      username: 'teset2',
      email: 'test2@test.com'
    }
  ];
  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    nextId.current += 1;
  }
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fonSize: 24, // 기본 단위px
    padding: '1rem' //다른 단위 사용 시 문자열로 설정
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    <>
      {/* 주석은 화면에 보이지 않는다. */}
    /* 중괄호로 감싸지 않으면 화면에 보인다 */
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true} /> {/* 자바스크립트 값은 중괄호로 감싸준다 */}
        <Hello color="pink" />
        <Hello isSpecial /> {/* props만있고 값이 없으면 true */}
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
      </Wrapper>
      <Counter />
      <InputSample />
      <UserList users={users}/>
    </>
    //   </header>
    // </div>
  );
}

export default App;
