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
    email: ''
  })

  const { username, email } = inputs;

  const onChange = e=>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'test1',
        email: 'public.velopert@gmail.com'
    },
    {
        id: 2,
        username: 'test2',
        email: 'tester@example.com'
    },
    {
        id: 3,
        username: 'test3',
        email: 'liz@example.com'
    }
]);
  const nextId = useRef(4);
  const onCreate = ()=>{
    // 나중에 구현 할 배열에 항목 추가하는 로직..
      const user = {
          id: nextId.current,
          username,
          email,
      };
      setUsers([...users, user]);

    setInputs({
        username: '',
        email: ''
    });
    nextId.current += 1;
  }
  return (
      <>
          <CreateUser
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
          />
          <UserList users={users} />
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
