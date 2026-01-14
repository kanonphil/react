import React from 'react'

const Variable2 = () => {
  // == : 값만 비교, 자료형은 비교하지 않음
  // === : 값과 자료형 모두를 비교
  // !==
  // ex
  // 10 == '10' -> true
  // 10 === '10' -> false

  const num = 4;

  // num이 짝수면 1을 출력, 홀수면 2를 출력
  let result = 0;
  if (num % 2 === 0) {
    result = 1;
  } else {
    result = 2;
  }

  return (
    <>
      <div>Variable2</div>
      <div>{result}</div>
    </>
   
  )
}

export default Variable2