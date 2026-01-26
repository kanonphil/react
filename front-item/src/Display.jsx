import React from 'react'

const Display = ({count}) => {
  return (
    <div style={{
      backgroundColor: 'lightgray',
      padding: '12px',
      margin: '12px 0px'
    }}>
      <p>현재 카운트 : </p>
      <h3>{count}</h3>
    </div>
  )
}

export default Display