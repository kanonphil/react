import { Link, Route, Routes } from "react-router-dom";
import First from "./First";
import Home from "./Home";

function App() {

  return (
    <>
      <h2>라우팅 연습</h2>
      
      <div>
        <Link to={''}>HOME</Link>
        <Link to={'/first'}>FIRST</Link>
      </div>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/first/:age/:name" element={<First />} />
        <Route path="/second" element={<div>두 번째 페이지</div>} />
        <Route path="/third" element={<div>세 번째 페이지</div>} />
        <Route path="*" element={<div>없는 페이지입니다</div>} />
      </Routes>
    </>
  )
}

export default App
