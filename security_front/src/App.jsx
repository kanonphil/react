import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import Login from "./Login"
import Home from "./Home"
import MyPage from "./MyPage"
import ProtectedRoute from "./ProtectedRoute"

function App() {

  return (
    <>
      <Header />

      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Home />} />

        {/* 로그인 페이지 */}
        <Route path="/login" element={<Login />} />

        {/* 마이페이지 (회원 전용) */}
        <Route path="/my-page" element={<ProtectedRoute><MyPage /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
