import React from 'react'

const ForEach2 = () => {
  const arr = [1, 5.5, 'react']

  return (
    <>
      <div>ForEach2</div>
      {
        arr.map((e, i) => {
          return (
            <div key={i}>{e}</div>
          )
        })
      }
    </>
  )
}

export default ForEach2