function App() {
  // 1. 일반 함수
  function greet() {
    alert("일반 함수 받기");
  }

  // 2. 함수 표현식
  const greet2 = function () {
    alert("함수 표현식 방가");
  }

  // 3. 화살표 함수
  const greet3 = () => {
    alert("화살표 함수 방가");
    // greet;  // 그냥 함수 객체
    greet(); // 함수를 호출해 실행 시킴
    greet2();
  }

  return (
    <>
      {/* 일반 함수 버튼이 클릭되면(클릭 이벤트 발생하면) 실행될 함수 greet 객체를 등록 */}
      <button onClick={greet}>일반 함수</button>
      <br /><br />
      <button onClick={greet2}>함수 표현식</button>
      <br /><br />
      <button onClick={greet3}>화살표 함수</button>
      <br /><br />
    </>
  )
}

export default App;