import { Route, Routes } from "react-router-dom"
import BoardList from "./pages/Board/List/BoardList"
import './reset.css'
import RegForm from "./pages/Board/RegForm/RegForm"
import BoardDetail from "./pages/Board/Detail/BoardDetail"
import UpdateForm from "./pages/Board/UpdateForm/UpdateForm"
import Header from "./components/Header/Header"

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
