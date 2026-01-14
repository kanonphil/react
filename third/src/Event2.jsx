import React from 'react'

const Event2 = () => {
  let title = 'hello react~';

  // 구조분해할당 : 배열, 객체에 저장된 다수의 데이터 각각을 편하게 사용하는 ㄴ바업ㅂ
  // 구조분해할당 사용x
  const arr = [1, 3.3, 'hello'];
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];

  // 구조분해할당
  const arr1 = [1, 3.3, 'hello'];
  const [a1, b1, c1] = arr1;
  console.log(a1); // 1

  const arr2 = [1, 3.3, 'hello'];
  const [a2, b2] = arr2;
  console.log(a2);
  console.log(b2);

  const [a3, b3, c3, d4] = arr2;
  console.log(d4); // undefined 변수 선언은 되었지만 초기값이 없음

  // 자바스크립트에서는 함수도 하나의 자료형으로 취급
  // 함수표현식이 대표적인 예
  const array = [
    5,
    'script',
    () => {
      console.log('함수실행');
    }
  ];

  const [aa, bb, cc] = array;


  return (
    <>
      <div>Event2</div>
      <h3>{title}</h3>
      <button type='button' onClick={() => {
        //title 변수의 값 변경
        title = 'hello java';
        console.log(title);
    }}>제목변경</button>
    </>
  )
}

export default Event2