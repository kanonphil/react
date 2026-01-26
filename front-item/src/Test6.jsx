import React, { useState } from 'react'
import Title from './Title'
import Display from './Display'
import Controller from './Controller'

const Test6 = () => {
  const [count, setCount] = useState(0)

  const handleChange = (value) => {
    setCount(count + value)
  }

  return (
    <>
      <Title />
      <Display count={count} />
      <Controller onChangeCount={handleChange} />
    </>
  )
}

export default Test6