import { Route, Routes } from "react-router-dom"
import BoardList from "./pages/BoardList"
import './reset.css'
import RegForm from "./pages/RegForm"
import BoardDetail from "./pages/BoardDetail"
import UpdateForm from "./pages/UpdateForm"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* 게시글 목록 페이지 */}
        <Route path="/" element={<BoardList />} />
        <Route path="/reg" element={<RegForm />} />
        <Route path="/detail/:boardNum" element={<BoardDetail />} />
        <Route path="/update/:boardNum" element={<UpdateForm />} />
      </Routes>
    </>
  )
}

export default App
