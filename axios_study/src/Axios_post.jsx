import axios from 'axios'
import React, { useState } from 'react'

const Axios_post = () => {
  const [data, setData] = useState({
    empNo: '',
    name: '',
    dept: '',
    salary: '',
    position: '',
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  // 등록 버튼 클릭 시 spring으로 요청을 보내는 함수
  // post 함수의 두 번째 매개변수는 spring으로 전달할 데이터다.
  // 전달할 데이터는 객체 형태로 보내야 함
  const handleSubmit = () => {
    axios.post('http://localhost:8080/emps', data)
      .then(response => {
        console.log('성공:', response.data)
      })
      .catch(error => {
        console.error('에러:', error)
      })
  }

  console.log(data)
  
  return (
    <>
      <h3>입력 데이터 spring으로 전달하기</h3>
      <div>
        사번
        <input 
          type="text" 
          name='empNo'
          value={data.empNo}
          onChange={handleChange}
        />
      </div>
      <div>
        사원명
        <input 
          type="text" 
          name='name'
          value={data.name} 
          onChange={handleChange}
        />
      </div>
      <div>
        부서명
        <input 
          type="text" 
          name='dept'
          value={data.dept} 
          onChange={handleChange}
        />
      </div>
      <div>
        급여
        <input 
          type="text" 
          name='salary'
          value={data.salary} 
          onChange={handleChange}
        />
      </div>
      <div>
        직급
        <input 
          type="text" 
          name='position'
          value={data.position} 
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="button" onClick={handleSubmit}>등록</button>
      </div>
    </>
  )
}

export default Axios_post