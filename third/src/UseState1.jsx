import React, { useState } from 'react'

const UseState1 = () => {
  const [count, setCount] = useState(0);

  const boxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: '#D11536',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    marginBottom: '10px',
    fontWeight: 'bold'
  };

  return (
    <div>
      <div style={boxStyle}>
        {count}
      </div>
  
      <button onClick={() => setCount(count + 1)} style={{
        width: '50px',
        height: '30px',
      }}>
        클릭
      </button>
    </div>
  )
}

export default UseState1