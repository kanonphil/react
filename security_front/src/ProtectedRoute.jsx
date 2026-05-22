import { useEffect, useState } from 'react'
import { getToken, isAuthenticated } from './api/authUtil'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  // 토큰 정보 (없으면 null 줌)
  const token = getToken()
  const [isAccessible, setIsAccessible] = useState(null)
  
  // 마운트되면 로그인 정보에 따라 접근 허용을 세팅
  useEffect(() => {
    if (!isAuthenticated(token)) {
      alert('로그인이 필요합니다.\n메인페이지로 이동합니다.')
      setIsAccessible(false)
    } else {
      setIsAccessible(true)
    }
  }, [])
  
  if (isAccessible === null) return null
  return isAccessible ? children : <Navigate to={'/'} />
}

export default ProtectedRoute