import React from 'react';

function Hello({color, name, isSpecial}){
    return (
        <div style={{ color }}>
        { isSpecial && <b>*</b>} 
        {/*A가 Truthy일 떄 B 반환
           A가 False면 결과 A */}
        안녕하세요 {name}
        </div>
    );
}

// defaultProps설정
Hello.defaultProps = {
    name: '이름없음'
}

export default Hello; // 컴포넌트를 내보내겟다