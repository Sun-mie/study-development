import React, { useRef, useState }from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';


function App() {
  const [inputs, setInputs] = useState({
    username: '',
    useYn: ''
  })

  const { username, useYn } = inputs;

  const onChange = e=>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const users = [

    {
        id: 1,
        username: 'test1',
        useYn : 'N'
    },
    {
        id: 2,
        username: 'test2',
        useYn : 'Y'
    },
    {
        id: 3,
        username: 'test3',
        useYn : 'N'
    }
];
  const nextId = useRef(4);
  const onCreate = ()=>{
    // 나중에 구현 할 배열에 항목 추가하는 로직..
    nextId.Counter += 1;
  }
  return (
    <>
      <CreateUser
        username={username}
        useYn={useYn}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users}/>
    </>
      // <Wrapper>
      //   <Hello isSpecial/>
      //   <Hello color="pink"/>
      //   <Hello color="red" name="react"/>
      //   <Counter/>
      //   <InputSample/>
      // </Wrapper>
  )
}

export default App;
