import { useState } from "react";
import "./Counter.css";
/*
    React State Hook 동작 과정
    1. hook 함수인 setCount(count+1) 호출
    2. React가 상태 변경을 감지
    3. 컴포넌트 함수를 다시 실행 (리렌더링) -> 버츄얼 돔을 운영하니까 실제 돔을 운영하는 것 보다 성능이 좋음
    4. 새로운 count 즉, 상태 값으로 화면 업데이트

    상위(부모) 컴포넌트로부터 전달되는 props 정보를 아래 매개 변수를 구조 분해 할당하여 바로 사용한다.
*/

function Counter({counterName}) {
    // let count = 0;
    // 초기값의 의미는 컴포넌트가 처음 렌더링 될때 상태 값
    // count : 현재 상태 값
    // useState Hook은 const [상태 변수, 상태 변경 함수] = useState(초기값);
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        // count = count + 1;  // 이렇게 변수에 정보를 변경한ㄷ가ㅗ 실제 화면에 반영되는 것은 아님
        // 변경하기 위해서는 React useState Hook으로 상태를 관리해야 화면에 반영됨
        setCount(count + 1);    // 리액트와 연결된 state hook 함수를 이용해 상태를 업데이트한다.
        console.log("increment");
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }
    return (
        <div className="counter">
        <h2>{counterName}카운터 : {count}</h2>
        <div className="buttons">
            <button onClick={handleDecrement}>-1</button>
            <button onClick={handleReset}>리셋</button>
            {/* jsx 이벤트 핸들러 연결 : onClick=함수 객체 => 클릭되었을 때 실행될 함수 객체 등록 */}
            <button onClick={handleIncrement}>+1</button>
        </div>

        {/* 학습용 디버그 정보 */}
        <div className="debug">
            <p>현재 상태값: {count}</p>
            <p>컴포넌트 렌더링 시간: {new Date().toLocaleTimeString()}</p>
        </div>
        </div>
    );
}

export default Counter;
