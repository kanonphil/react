import { Route, Routes } from "react-router-dom"
import BoardList from "./pages/Board/List/BoardList"
import './reset.css'
import RegForm from "./pages/Board/RegForm/RegForm"
import BoardDetail from "./pages/Board/Detail/BoardDetail"
import UpdateForm from "./pages/Board/UpdateForm/UpdateForm"
import Header from "./components/Header/Header"
import UseState1 from "./study/UseState1"
import UseState2 from "./study/UseState2"
import Axios1 from "./study/Axios1"
import Axios2 from "./study/Axios2"
import Export1 from "./study/Export1"

function App() {
  return (
    <>
      <Header />

      <div style={{
        padding: '40px'
      }}>
        {/* 학습용 컴포넌트 */}
        {/* <UseState1 /> */}
        {/* <UseState2 /> */}
        {/* <Axios1 /> */}
        {/* <Axios2 /> */}
        <Export1 />
      </div>
      

      {/* <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/reg" element={<RegForm />} />
        <Route path="/detail/:boardNum" element={<BoardDetail />} />
        <Route path="/update/:boardNum" element={<UpdateForm />} />
      </Routes> */}
    </>
  )
}

export default App
