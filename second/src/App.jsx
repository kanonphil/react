import Header from "./Header";
import Footer from "./Footer";
// 이건 함수 x
// 함수 형태인데 대문자로 시작 -> 컴포넌트(Component)
// 컴포넌트 리턴문에 html 코드가 있으면 화면에 그려준다.
function App() {
  let str = 'hi';
  let num = 10;
  let num2 = 5;

  return (
    <div>
      <Header />
      <div>
        <div>{str}</div>
        <div>{num}</div>
        <div>{num - num2}</div>
      </div>
      <Footer />
      <input type="text" />
    </div>
  )
}

export default App
