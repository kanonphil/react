import React from 'react'
import { useParams } from 'react-router-dom'

const First = () => {
  //const param = useParams()
  //console.log(param)
  const {age, name} = useParams()

  return (
    <>
      <h3>First 컴포넌트 입니다</h3>
      <p>/first url을 입력 시 컴포넌트가 보입니다.</p>
      <p>URL Parameter로 전달받은 값 : {age}, {name}</p>
    </>
  )
}

export default First