import React, { useState } from 'react'

const Input2 = () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')

  return (
    <div>
      <input type="text" value={input1} onChange={() => {setInput1}} />
      <input type="text" value={input2} onChange={() => {setInput2}} />
    </div>
  )
}

export default Input2