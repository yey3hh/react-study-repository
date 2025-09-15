import "./App.css";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";

function App() {
  // javascript 영역 : 로직
  return (
    // 화면에 보여질 (렌더링) UI 정보 : JSX로 정의
    // JSX 영역
    <div className="App">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">React 상태 관리 학습</h1>
          <p className="app-subtitle">
            Props , useState Hook과 이벤트 처리로 상호작용하는 컴포넌트 만들기
          </p>
        </header>

        <main className="app-main">
          <section className="component-section">
            <h2 className="section-title">카운터 컴포넌트</h2>
            <p className="section-description">
              useState를 사용한 숫자 상태 관리
            </p>
            {/* Counter 컴포넌트를 import해서 사용 */}
            {/* 
              상위 컴포넌트에서 하위 컴포넌트로 정보를 전달하는 Props를 이용해서 
              1. 여행 카운터 이름을 전달하고 
              2. 독서 카운터 이름을 props로 전달
            */}
            <Counter counterName="여행" />
            <Counter counterName="독서" />
          </section>

          {/* LikeButton 컴포넌트 섹션 */}
          <section className="component-section">
            <h2 className="section-title">💖 좋아요 버튼</h2>
            <p className="section-description">Props 와 useState 를 이용</p>

            {/* 여러 개의 LikeButton으로 독립적인 상태 확인 */}
            {/* 
              상위 컴포넌트에서 하위 컴포넌트로 정보를 전달하는 Props를 이용해서 
              1. 제니 좋아요 컴포넌트 이름을 전달하고 
              2. 뉴진스 좋아요 이름을 props로 전달
              3. 키키 좋아요
            */}
            <div className="like-buttons-grid">
              <LikeButton postTitle="제니" />
              <LikeButton postTitle="뉴진스" />
              <LikeButton postTitle="키키" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
