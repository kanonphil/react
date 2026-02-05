import React, { useState } from 'react'

const UseState2 = () => {

  // 객체의 함수형 업데이트 사용 방법
  const [member, setMember] = useState({
    name: 'kim',
    age: 20,
    addr: '서울시'
  })

  return (
    <div>
      <div>
        이름: {member.name} <br />
        나이: {member.age} <br />
        주소: {member.addr} <br />
      </div>

      <button 
        type="button"
        onClick={() => {
          setMember(prev => ({
              ...prev, 
              name: 'lee'
          }))

          setMember(prev => {
            return {
              ...prev, 
              age: 30
            }
          })
        }}
      >
        클릭</button>
    </div>
  )
}

export default UseState2