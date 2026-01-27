import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const nav = useNavigate()

  return (
    <>
      <h2>메인페이지</h2>
      <p>본 컴포넌트는 메인페이지이므로 프로젝트 시작과 동시에 보입니다.</p>
      <button 
        type="button" 
        onClick={(e) => {
          nav('/first')
        }}
      >
        클릭하면 first 페이지로 이동
      </button>
    </>
  )
}

export default Home