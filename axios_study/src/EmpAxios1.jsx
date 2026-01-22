import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EmpAxios1 = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/emps')
      .then(response => {
        setData(response.data)
      })
      .catch(e => {console.log(e)})
  }, [])

  const thStyle = {
    textAlign: 'center',
    padding: '10px 40px',
    backgroundColor: 'aquamarine',
    border: '1px solid white',
    // color: 'white',
  }

  const tdStyle = {
    textAlign: 'center',
    padding: '10px 40px',
    backgroundColor: 'skyblue',
    border: '1px solid white',
  }

  return (
    <>
      <table style={{borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th style={thStyle}>사원번호</th>
            <th style={thStyle}>이름</th>
            <th style={thStyle}>부서</th>
            <th style={thStyle}>급여</th>
            <th style={thStyle}>직급</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp, index) => {
            return (
              <tr key={emp.empNo}>
                <td style={tdStyle}>{emp.empNo}</td>
                <td style={tdStyle}>{emp.name}</td>
                <td style={tdStyle}>{emp.dept}</td>
                <td style={tdStyle}>{emp.salary}</td>
                <td style={tdStyle}>{emp.position}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default EmpAxios1