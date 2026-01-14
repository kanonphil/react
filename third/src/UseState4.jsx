import React, { useState } from 'react'

const UseState4 = () => {
  const [counts, setCounts] = useState([0, 0, 0]);

  const handleIncrease = (index) => {
    const newCounts = [...counts];
    newCounts[index] = newCounts[index] + 1;
    setCounts(newCounts);
  };

  const boxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: '#D11536',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '10px',
  };

  const numStyle = {
    cursor: 'pointer',
    userSelect: 'none',
  }

  return (
    <div style={{
      padding: '20px',
    }}>
      <div style={{
        display: 'flex',
      }}>
        {counts.map((num, index) => (
          <div key={index} style={boxStyle}>
            <span
              style={numStyle}
              onClick={() => handleIncrease(index)}
            >
              {num}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UseState4