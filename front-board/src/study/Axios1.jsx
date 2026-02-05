import axios from 'axios'
import React from 'react'

// axios는 비동기 방식으로 동작한다.
// 비동기 방식: 코드 실행 시 결과를 기다리지 않고 다음 코드를 실행하는 것
const Axios1 = () => {

  const getData = () => {
    console.log(1)
    let num

    axios.get('http://localhost:8080/replies/board/13')
    .then(response => {
      console.log(2)
      num = 5
    })
    .catch(e => console.log(e))

    console.log(3)
    console.log(num)
  }
  return (
    <div>
      <button type="button" onClick={e => {getData()}}>데이터 조회</button>
    </div>
  )
}

export default Axios1