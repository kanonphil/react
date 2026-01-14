import React, { useState } from 'react'

const UseState2 = () => {
  const [boxMod, setBoxMod] = useState('ON');
  const [buttonMod, setButtonMod] = useState('OFF');

  const handleToggle = () => {
    setBoxMod(mod => mod === 'ON' ? 'OFF' : 'ON'); 
    setButtonMod(mod => mod === 'OFF' ? 'ON' : 'OFF');
  }

  return (
    <div>
      <div style={{
        fontSize: '2rem',
        fontWidth: 'bold',
      }}>
        {boxMod}
      </div>

      <button onClick={handleToggle} style={{
        width: '50px'
      }}>
        {buttonMod}
      </button>
    </div>
  )
}

export default UseState2