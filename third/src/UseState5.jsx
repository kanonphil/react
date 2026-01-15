import React, { useState } from 'react'

const UseState5 = () => {
  const [user, setUser] = useState({
    name: '김자바',
    age: 20,
    addr: '울산시'
  });

  const changeName = () => {
    setUser({...user, name: '홍길동'});
  };

  const changeAge = () => {
    setUser({...user, age: 30});
  };

  const changeAddr = () => {
    setUser({...user, addr: '서울시'})
  }

  return (
    <div style={{padding: '20px'}}>
      <div style={{marginBottom: '20px', lineHeight: '2'}}>
        <div><strong>이름 : {user.name} </strong> </div>
        <div><strong>나이 : {user.age} </strong> </div>
        <div><strong>주소 : {user.addr} </strong> </div>
      </div>
      <div style={{display: 'flex', gap: '5px'}}>
        <button onClick={changeName}>이름을 홍길동으로 변경</button>
        <button onClick={changeAge}>나이를 30으로 변경</button>
        <button onClick={changeAddr}>주소를 서울시로 변경</button>
      </div>
    </div>
  )
}

export default UseState5