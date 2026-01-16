import React, { useState } from 'react'

//input 태그에 입력한 내용 확인
const Input1 = () => {
  const [data, setData] = useState('');

  return (
    <div>
      <input type="text" value={data} onChange={() => {setData}} />
    </div>
  )
}

export default Input1