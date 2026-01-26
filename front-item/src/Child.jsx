import React from 'react'

// 컴포넌트의 매개변수 자리에 'props'라는 매개변수를 선언하면
// props 매개변수에 부모 컴포넌트로 부터 전달 받은 데이터를 확인할 수 있음 
// props는 객체다
const Child = (props) => {
  console.log(props)

  return (
    <>
      <h3>자식 컴포넌트</h3>
      <div>{props.addr}</div>
    </>
  )
}

export default Child