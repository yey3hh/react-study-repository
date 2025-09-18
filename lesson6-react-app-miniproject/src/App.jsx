import { useState } from "react";
import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data/data.js";
import { EXAMPLES } from "./data/data.js";

function App() {
  // state 상태 관리 : useState Hook 을 이용
  // selectedTopic : 사용자가 어떤 탭을 선택했는지 탭 제목을 저장
  // setSelectedTopic : 사용자가 탭을 선택했을 때 React에 탭 정보 변경을 알려서 리렌더링 되도록 하는 함수
  const [selectedTopic, setSelectedTopic] = useState();
  // 탭 버튼 클릭 시 호출되는 함수 (탭 버튼 이벤트 핸들러)
  // 탭 버튼 정보 : components, jsx, props, state 중 하나
  // (data.js 내의 json 정보)
  function handleSelector(selectedButton) {
    // 어떤 버튼을 클릭했느냐에 대한 정보
    // react state hook 함수를 호출해 화면 리렌더링을 한다.
    setSelectedTopic(selectedButton);
  }
  console.log("Component rendering");
  let tabContent = <p>주제를 선택하세요</p>;
  // 선택된 토필이 있으면 해당 내용을 표시
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>{EXAMPLES[selectedTopic].code}</pre>
      </div>
    );
  }

  return (
    <div>
      {/* Header 컴포넌트 렌더링 */}
      <Header />
      <main>
        {/* ===== 섹션 1: Core Concepts ===== */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* map()을 사용한 동적 리스트 렌더링 */}
            {/* key prop은 React가 각 항목을 추적하는데 필요 
            
              {
                CORE_CONCEPTS.map((conceptItem) => {
                  return (
                    <CoreConcept 
                      key={conceptItem.title}
                      image={conceptItem.image}
                      title={conceptItem.title}
                      description={conceptItem.description}
                    />
                  )
                })
              }
            */}
            {/* 
              스프레드 연산자로 효율적으로 props 전달, 화살표 함수를 간략하게 표현 {}가 아니라 () 형태로 
              {...conceptItem} 표현은 image={conceptItem.image} title={conceptItem.title} 
              description={conceptItem.description} 와 동일한 표현임

              화살표 함수 { } return 시에 return keyword를 명시
              화살표 함수 ( ) return 생략 => 화살표 함수 축약 형태이고 실행문이 한문장 일 때 사용할 수 있다.
            */}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        {/* ===== 섹션 2: Examples ===== */}
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* 각 TabButton에 이벤트 핸들러와 선택 상태 전달 */}

            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelector("components")}
            >
              Components
            </TabButton>

            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelector("jsx")}
            >
              jsx
            </TabButton>

            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelector("props")}
            >
              props
            </TabButton>

            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelector("state")}
            >
              state
            </TabButton>
          </menu>
          {/* 조건부로 렌더링되는 컨텐츠 */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
