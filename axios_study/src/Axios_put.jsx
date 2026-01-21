import axios from 'axios'
import React, { useState } from 'react'

const Axios_put = () => {
  // const [empNo, setEmpNo] = useState('')
  // const [dept, setDept] = useState('')
  // const [salary, setSalary] = useState('')

  const [data, setData] = useState({
    empNo: '',
    dept: '개발부',
    salary: '',
  })

  const handleData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const updateEmp = () => {
    axios.put(`http://localhost:8080/emps/${data.empNo}`, data)
      .then(response => {
        alert('성공')
      })
      .catch(e => console.log(e))
  }

  // const handleUpdate = () => {
  //   const data = {
  //     dept: dept,
  //     salary: salary
  //   }

  //   axios.put(`http://localhost:8080/emps/${empNo}`, data)
  //     .then(response => {
  //       alert(`${empNo}번 사원 정보가 수정되었습니다.`)
  //       setEmpNo('')
  //       setDept('')
  //       setSalary('')
  //     })
  //     .catch(e => console.log(e))
  // }

  return (
    <>
      <h3>사원 정보 수정</h3>
      <div>
        사번
        <input 
          type="text" 
          name='empNo'
          value={data.empNo}
          onChange={(e) => handleData(e)}
        />
      </div>
      <div>
        수정할 부서명
        <select
          name='dept'
          value={data.dept}
          onChange={(e) => handleData(e)}
        >
          <option value="개발부">개발부</option>
          <option value="영업부">영업부</option>
          <option value="인사부">인사부</option>
        </select>
      </div>
      <div>
        수정할 급여
        <input 
          type="text" 
          name='salary'
          value={data.salary}
          onChange={(e) => handleData(e)}
        />
      </div>
      <div>
        <button type="button" onClick={e => updateEmp()}>수정</button>
      </div>
    </>
  )
}

export default Axios_put