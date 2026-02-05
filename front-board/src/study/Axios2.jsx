import axios from 'axios'
import React, { useState } from 'react'

const Axios2 = () => {
  // 조회한 학생 정보를 저장한 state 변수
  const [stuInfo, setStuInfo] = useState({})
  const [gradeInfo, setGradeInfo] = useState({})

  // 학생의 상세 정보 조회 및 점수 조회
  const getData = async () => {
    try {
      // 학번이 1001번인 학생의 정보를 조회
      const studentResponse = await axios.get('http://localhost:8080/students/1001')
      setStuInfo(studentResponse.data)

      console.log('학생 정보:', studentResponse.data)

      // 조회한 학생의 성적 정보 조회
      const gradeResponse = await axios.get(`http://localhost:8080/grades/${studentResponse.data.gradeNum}`)
      setGradeInfo(gradeResponse.data)

      console.log('성적 정보:', gradeResponse.data)
      
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <button 
        type="button"
        onClick={getData}
      >
        학생 정보 조회
      </button>

      {/* {stuInfo && (
        <div>
          <h3>학생 정보</h3>
          <p>학번: {stuInfo.stuNum}</p>
          <p>이름: {stuInfo.stuName}</p>
        </div>
      )}

      {gradeInfo && (
        <div>
          <h3>성적 정보</h3>
          <p>국어 점수: {gradeInfo.korScore}</p>
          <p>영어 점수: {gradeInfo.engScore}</p>
          <p>수학 점수: {gradeInfo.mathScore}</p>
        </div>
      )} */}
    </div>
  )
}

export default Axios2