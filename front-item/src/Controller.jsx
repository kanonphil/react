import React from 'react'

const Controller = ({onChangeCount}) => {
  return (
    <div style={{
      backgroundColor: 'lightgray',
      padding: '12px',
      margin: '12px 0px'
    }}>
      <button type="button" onClick={() => onChangeCount(-10)}>-10</button>
      <button type="button" onClick={() => onChangeCount(-1)}>-1</button>
      <button type="button" onClick={() => onChangeCount(+1)}>+1</button>
      <button type="button" onClick={() => onChangeCount(+10)}>+10</button>
    </div>
  )
}

export default Controller