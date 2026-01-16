import React, { useState } from 'react'

const Input3 = () => {
  const [data, setData] = useState({
    id: '',
    pw: '',
    name: ''
  })

  const handleData = (e) => {
    const {name, value} = e.target
    setData({
      ...data,
      [name] : value
    })
  }

  return (
    <>
      아이디
      <input 
        type="text" 
        name='id'
        value={data.id}
        onChange={handleData}
      />
      <br />

      비밀번호
      <input 
        type="text" 
        name='pw'
        value={data.pw}
        onChange={(e) => {
          handleData(e)
        }}
      />
      <br />

      이름
      <input 
        type="text" 
        name='name'
        value={data.name}
        onChange={handleData}
      />

      <hr />
      <div>
        <p>ID: {data.id}</p>
        <p>PW: {data.pw}</p>
        <p>Name: {data.name}</p>
      </div>
    </>
  )
}

export default Input3