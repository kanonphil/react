import axios from 'axios'
import React from 'react'

const Axios1 = () => {

  // 요청 url로 spring서버로 요청
  axios.get('http://localhost:8080/emps')
       // 통신 성공 시 실행 영역
       .then((response) => { // 매개변수 : 응답 성공에 대한 모든 정보를 가진 객체
          console.log('통신 성공')
          console.log(response)
       })
       // 통신 실패 시 실행 영역
       .catch((error) => { // 매개변수 : 응답 실패에 대한 모든 정보를 가진 객체
          console.log('통신 실패')
       })

  return (
    <div>Axios1</div>
  )
}

export default Axios1