import { Link, useNavigate } from 'react-router-dom'
import { getToken, isAdmin, isAuthenticated } from './api/authUtil'

const Header = () => {
  // 페이지 이동 시 useNavigate() 함수를 사용하고 있는 컴포넌트는 자동 리렌더링
  const navigate = useNavigate()

  const token = getToken()
  
  return (
    <>
      <div style={{
        border: '1px solid black'
      }}>
        <h3>
          <Link to='/'>헤더입니다</Link>
        </h3>
        <div style={{
          display: 'flex',
          justifyContent: 'end',
          gap: '1rem'
        }}>
          <p>
            <Link to='/login'>login</Link>
          </p>
          <p>join</p>
        </div>
      </div>
      <div style={{
        display: 'flex',
        gap: '1rem'
      }}>
        <p>누구나 접근 가능한 메뉴</p>

        {isAuthenticated(token) && <p onClick={e => navigate('/my-page')}>로그인 한 유저만 접근 가능</p>}
        
        {isAdmin(token) && <p>관리자만 접근 가능</p>}
      </div>
    </>
  )
}

export default Header