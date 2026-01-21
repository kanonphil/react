import React from 'react'

const ForEach3 = () => {
  const options = ['C++', 'JAVA', 'Python']

  return (
    <>
      <select defaultValue="">
        <option value="">
          과목선택
        </option>
        {options.map((item, index) => {
          return(
            <option key={index} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default ForEach3