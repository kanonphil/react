import axios from 'axios'
import React from 'react'

// axios의 또 다른 사용방법
const Axios3 = () => {

  // axios를 비동기에서 동기식으로 실행 동작을 변경할 수 있음
  // await, async 키워드를 사용하면 가능
  // await 키워드는 axios 명령어 앞에 붙음
  // async 키워드는 axios 코드가 포함된 함수의 정의문 앞에 붙음
  // 이 방식을 쓰면 await가 붙은 axios는 동기적으로 실행되나,
  // async가 붙어버린 함수 자체는 비동기가 되어버림.
  const getData = async () => {
    try {
      const response = await axios.get('url')
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
    
  }

  return (
    <div>Axios3</div>
  )
}

export default Axios3