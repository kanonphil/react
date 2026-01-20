import axios from 'axios'
import React, { useState } from 'react'

const Axios4 = () => {
  const [data, setData] = useState({})
  const [empNo, setEmpNo] = useState('0')

  const handleChange = (e) => {
    if (e !== '0') {
      axios.get(`http://localhost:8080/emps/${e}`)
        .then((response) => {
          setData(response.data)
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error)
          setData({})
        })
    } else {
      setData({})
    }
  }

  return (
    <>
      <h3>조회할 사번 선택</h3>
      <select 
        value={empNo} 
        onChange={(e) => {
          setEmpNo(e.target.value) 
          handleChange(e.target.value)
        }}>
        <option value='0'>사번선택</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>

      <div>
        <p>조회 정보 입니다.</p>
        <p>사번: {data.empNo}</p>
        <p>사원명: {data.name}</p>
        <p>급여: {data.salary}</p>
        <p>부서명: {data.dept}</p>
        <p>직급: {data.position}</p>
      </div>
    </>
  )
}

export default Axios4
