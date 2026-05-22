import { useState } from 'react'
import { goLogin } from './api/memberApi'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  
  const [loginData, setLoginData] = useState({
    'memEmail': '',
    'memPw': ''
  })

  const handleLoginData = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const login = async () => {
    // 로그인 성공 시 응답 헤더에 토큰이 실려서 옴
    const response = await goLogin(loginData)

    if (response.status === 200) {
      console.log(response)
      console.log(response.headers.authorization)
  
      // 토큰을 LocalStorage에 저장
      localStorage.setItem('token', response.headers.authorization)

      // 메인페이지 이동
      navigate('/')
    } else {
      alert('로그인 실패')
    }
    
  }
  
  return (
    <div>
      <div>
        아이디
        <input 
          type="text" 
          name='memEmail'
          value={loginData.memEmail}
          onChange={e => handleLoginData(e)}
        />
      </div>
      <div>
        비밀번호
        <input 
          type="password" 
          name='memPw'
          value={loginData.memPw}
          onChange={e => handleLoginData(e)}
        />
      </div>
      <div>
        <button 
          type="button"
          onClick={login}
        >
          로그인
        </button>
      </div>
    </div>
  )
}

export default Login