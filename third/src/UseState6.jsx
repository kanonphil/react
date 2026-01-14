import React, { useState } from 'react'

const UseState6 = () => {
  const [count, setCount] = useState(0);

  const handleCount = (value) => {
    setCount(count + value);
  };

  const containerStyle = {
    padding: '20px',
    fontFamily: 'sans-serif',
  };

  const displayBoxStyle = {
    width: '500px',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    marginBottom: '5px',
    
  };

  return (
    <div style={containerStyle}>
      <h1>Simple Counter</h1>
      <div style={displayBoxStyle}>
        <div style={{fontSize: '0.9rem', fontWeight: 'bold'}}>현재 카운트 : </div>
        <div style={{fontSize: '1.5rem', fontWeight: 'bold', margin: '10px 0'}}>
          {count}
        </div>
      </div>

      <div style={displayBoxStyle}>
        <button onClick={() => handleCount(-1)}>-1</button>
        <button onClick={() => handleCount(-10)}>-10</button>
        <button onClick={() => handleCount(-100)}>-100</button>
        <button onClick={() => handleCount(+100)}>+100</button>
        <button onClick={() => handleCount(+10)}>+10</button>
        <button onClick={() => handleCount(+1)}>+1</button>
      </div>
    </div>
  )
}

export default UseState6