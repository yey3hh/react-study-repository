import React, { useState } from "react";
import "./App.css";
import LifecycleDemo from "./components/LifecycleDemo";

const App = () => {
  // 버튼 보이는 상태를 저장하기 위한 useState hook 정의
  // 배열 첫번째 상태 변수, 배열 두번째 상태 함수
  const [showComponent, setShowComponent] = useState(true);
  return (
    <div className="app-container">
      <h2>useEffect 라이프사이클 학습</h2>
      {/* <LifecycleDemo /> */}
      {/* 언마운트 테스트를 위한 버튼 onClick=화살표 함수 : 이벤트 핸들러 binding 등록 */}
      <button className="toggle-btn" onClick={() => setShowComponent(!showComponent)}>
        LifecycleDemo 컴포넌트 {showComponent ? '숨기기' : '보이기'}
      </button>
      {/* showComponent 상태가 true일 때만 LifecycleDemo를 렌더링 */}
      {showComponent && <LifecycleDemo />}
    </div>
  );
};

export default App;
