import React from 'react';

function CreateUser({ username, useYn, onChange, onCreate }){
    return(
        <div>
            <input 
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="사용여부"
                onChange={onChange}
                value={useYn}
            />
            <button onclick={onCreate}>등록</button>
        </div>
    );
}

export default CreateUser;