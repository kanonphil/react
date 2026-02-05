import axios from 'axios'
import React, { useState } from 'react'

// State 변경함수 코드가 해석되면 
// State 변경함수의 실행은 나머지 코드 실행 완료 후 일괄 처리
// State 변경함수가 여러 개 실행 되어도 1회만 리렌더링 한다.
// 화살표 함수를 사용하면 여러 개 가능

// State 변경함수 사용법은 두 가지가 존재
// 1. setCnt(cnt 변수에 저장할 값)
//    ex> setCnt(7) -> cnt값을 7로 변경
// 2. 함수형 업데이트: setCnt((이전 cnt 값) => {return cnt 변수에 저장할 값})
//    ex> setCnt(prev => {return 7})
//    -> setCnt(prev => 7)
const UseState1 = () => {
  const [cnt, setCnt] = useState(0)

  const [cnt2, setCnt2] = useState(0)

  // 게시글 번호를 저장하는 state 변수
  const [boardNum, setBoardNum] = useState(1)

  // 게시글 상세조회 함수
  const getBoardList = () => {
    setBoardNum(5)
    // boardNum에는 5가 아닌 1이 들어감 주의
    axios.get(`http://localhost:8080/boards/${boardNum}`)
    .then().catch()
  }

  return (
    <div>
      <h3>cnt = {cnt}</h3>
      <button 
        type="button"
        onClick={() => {
          console.log(cnt)
          setCnt(cnt + 1)
          console.log(cnt)
          setCnt(cnt + 1)
          console.log(cnt)
        }}
      >
        클릭
      </button>

      <h3>cnt2 = {cnt2}</h3>
      <button 
        type="button"
        onClick={() => {
          console.log(cnt2)
          setCnt2(prev => prev + 1)
          console.log(cnt2)
          setCnt2(prev => prev + 1)
          console.log(cnt2)
        }}
      >
        클릭
      </button>
    </div>
  )
}

export default UseState1