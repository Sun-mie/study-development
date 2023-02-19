import React from 'react';

function Wrapper({children}){ // children : 내부에 내용 받아오기
    const style = {
        border: '2px solid black',
        padding: '16px',
    };
    return (
        <div style={style}>
            {children}
        </div>
    )
}
export default Wrapper;