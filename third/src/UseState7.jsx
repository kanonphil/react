import React, { useState } from 'react'

const UseState7 = () => {
  // TRUTHY -> true는 아닌데 true와 같은 결과로 판단
  // FALSY -> false는 아닌데 false처럼 판단
  // TRUTY
  // 1. 0이 아닌 숫자
  // 2. 빈 문자열이 아닌 문자열

  // FALSY
  // 1. 0
  // 2. 빈 문자열
  // 3. null
  // 4. undefind
  // 5. NaN (Not a Number) console.log('java' * 10)

  // 단락평가: 논리연사에서 사용
  //console.log(true) // true
  //console.log(true && 10) // 10
  //console.log(true || 10) // true



  // --------------------------------------------------
  const [showBox, setShowBox] = useState(false);

  const handleBox = () => {
    setShowBox(!showBox);
  };

  const redBoxStyle = {
    width: '300px',
    padding: '20px',
    margin: '5px 20px',
    backgroundColor: '#f08080',
    color: 'white',
    textAlign: 'center',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 2,
  }

  const blueBoxStyle = {
    width: '300px',
    padding: '20px',
    margin: '5px 20px',
    backgroundColor: '#87cefa',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    // 트랜지션을 주고 싶으면 조건부 렌더링 x, opacity 쓰기
    transition: 'opacity 0.5s ease, transform 1s ease, visibility 0.5s ease',
    opacity: showBox ? 1 : 0,
    visibility: showBox ? 'visible' : 'hidden',
    // slide 느낌 주고 싶을 때 사용해보기
    transform: showBox ? 'translateY(0)' : 'translateY(-100%)',
  }

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div 
          onMouseEnter={handleBox}
          onMouseLeave={handleBox}
          style={redBoxStyle}>
          마우스를 올리면 숨겨진 글자가 보여요
        </div>
        <div>
          {/* 조건부 x */}
          <div style={blueBoxStyle}>
            Hello React!
          </div>
        </div>
      </div>
    </>
  )
}

export default UseState7