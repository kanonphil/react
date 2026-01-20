import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios3 = () => {
  const [data, setData] = useState(null)
  const [empNo, setEmpNo] = useState('')

  // 사번으로 사원 조회
  const handleSearch = () => {
    axios.get(`http://localhost:8080/emps/${empNo}`)
      .then((response) => {
        setData(response.data);
        console.log('조회 성공:', response.data);
      })
      .catch((error) => {
        alert('해당 사번의 사원이 없습니다.');
        setData(null);
        console.error('조회 실패:', error);
      });
  };

  return (
    <>
      <h3>아래 input 태그에 입력한 사번을 가진 사원의 모든 정보를 버튼 클릭 시 출력</h3>
      
      <input 
        type="text" 
        placeholder='사번 입력'
        value={empNo}
        onChange={(e) => setEmpNo(e.target.value)}
      />
      <button type="button" onClick={handleSearch}>조회</button>

      <div>
          <>
            <p>조회 정보 입니다.</p>
            <p>사번: {data ? data.empNo : ''}</p>
            <p>사원명: {data ? data.name : ''}</p>
            <p>급여: {data ? data.salary : ''}</p>
            <p>부서명: {data ? data.dept : ''}</p>
            <p>직급: {data ? data.position : ''}</p>
          </>
      </div>
    </>
  )
}

export default Axios3