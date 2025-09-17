import { useState } from "react";
import "./TodoList.css";
/*
    리스트 렌더링 핵심 포인트:

    1. map() 메서드: 배열.map((item) => <JSX key={item.id}>)
    - 배열의 각 요소를 JSX로 변환

    2. key prop: React가 리스트를 효율적으로 관리
    - 고유한 값 사용 (id, index 등)
    - key가 없으면 경고 발생

    3. 동적 리스트: 상태 변경으로 추가/삭제
    - spread 연산자로 새 배열 생성
    - filter로 항목 제거

    이 예제에서 구현해볼 것:
    - todos 배열을 map으로 순회하며 li 요소 생성
    - 각 li에 key={todo.id} 필수 설정
    - 상태 변경시 자동 리렌더링
    - 빈 배열일 때 조건부 렌더링
*/
function TodoList() {
    // 로직 : javascript
    // To do list 상태 관리 -> React hook useState
    // to do list 상태 정보를 저장하는 todos 변수, to do list 상태를 변화시키기 위한 함수 setTodos
    // 아래의 useState(초기값)은 실제로 API Server 연동을 통해 확보하지만 지금은 직접 입력한다. (JSON Array)
    const [todos, setTodos] = useState([
        {id : 1, text : '점심 먹기', completed : false},
        {id : 2, text : '카드 놀이', completed : true}
    ]);
    // 새로운 to do 입력 상태
    const [newTodo, setNewTodo] = useState('');

    // 할 일 to do 추가 함수
    const addTodo = () => {
        if(newTodo.trim()) {
            const todo = {
                id: Date.now(), // 시간 정보를 이용해 고유 아이디 생성
                text: newTodo,
                completed: false
            }
            setTodos([...todos, todo]); // 기존 배열에 새 항목 추가한 새 배열 생성해 할당. 스프레드 연산자!
            setNewTodo('')  // 입력창 초기화
        }
    }

    // to do 항목 삭제 함수
    const deleteTodo = (id) => {
        // console.log("삭제할 to do id : " + id);
        // to do list 중 해당 id를 가진 to do 요소를 삭제하고 to do list를 리렌더링하기 위해서는 react hook state를 이용해야 함 => 변경 위해서는 useState hook 함수가 반환한 두번째 요소인 set 계열 함수를 이용해 업데이트 해야 한다.
        
        // filter 함수는 todo.id != id이 true이면 새 배열 요소로 추가
        // 다시 말하면 삭제할 to do id이면 != 에 의해 false가 나올 것이고 이는 새 배열 요소에서 제외됨 -> 즉, 삭제 효과
        setTodos(todos.filter((todo) => todo.id != id));    // todo.id가 넘어 온 id와 같지 않다면!

    }


    // 화면 렌더링 : jsx
    return (
        <div className="todo-list">
            <h2>할 일 목록</h2>

            {/* 새 할 일 추가 */}
            <div className="add-todo">
                <input type="text" 
                    placeholder="새 할 일을 입력하세요"
                    value={newTodo} // 입력 폼 요소 값 value를 리액트 state 상태 값으로 관리
                    onChange={(event) => setNewTodo(event.target.value)}    // 입력 요소 value가 change 변경될 때 react state hook의 함수로 상태를 변경 -> 앱에 리렌더링
                    // 아래는 key를 눌렀을 때 발생하는 이벤트
                    
                    // keyDown 이벤트 발생 시 실행될 화살표 함수 arrow function이 등록 binding
                    // addTodo가 아니라 addTodo()로 명시한 이유는 엔터키 이벤트 발생시에 바로 호출 즉, 실행되어 todo를 추가히기 위해. 즉, 구현부 내에서는 실행을 해야 하므로 반드시 ()를 명시해야 됨.
                    onKeyDown={(event) => event.key === 'Enter' && addTodo()}  
                />
                {/* 아래는 버튼이 클릭되어지면 (클릭 이벤트) 실행될 함수를 등록 binding */}
                <button onClick={addTodo}>추가</button>
                {/* 
                    함수 실행에 3가지 스타일이 있음
                    1. onChange={(event) => setNewTodo(event.target.value)}
                    2. onKeyDown={(event) => event.key === 'Enter' && addTodo()}
                    3. <button onClick={addTodo}>추가</button>

                    const addTodo = () => {
                        if(newTodo.trim()) {
                            const todo = {
                                id: Date.now(), 
                                text: newTodo,
                                completed: false
                            }
                            setTodos([...todos, todo]);
                            setNewTodo('') 
                        }
                    }

                    아래를 축약형으로 만든 게 -> const addTodo = () => { 

                    function(event) {   -> 익명 함수
                        setNewTodo(...)
                    }

                    function test(event) {
                        setNewTodo(...)
                    }
                    
                    아래 부분과 setNewTodo(event.target.value) 은 같은 것
                    if(newTodo.trim()) {
                        const todo = {
                            id: Date.now(), 
                            text: newTodo,
                            completed: false
                        }
                        setTodos([...todos, todo]);
                        setNewTodo('') 
                    }

                    (event) => event.key === 'Enter' && addTodo()는 아래와 같은 것 (if문)
                    function(evnet) {
                        if(event.key === 'Enter') {
                            addTodo();  -> 실제 실행 내용
                        }
                    }
                    onClick={addTodo} 또한 동일 메서드를 실행하는 게 아니라 등록을 하는 것
                    addTodo은 함수 객체. 아래와 동일한 것
                    if(newTodo.trim()) {
                        const todo = {
                            id: Date.now(), 
                            text: newTodo,
                            completed: false
                        }
                        setTodos([...todos, todo]);
                        setNewTodo('') 
                    }

                */}
            </div>

            {/* 리스트 렌더링 - map() 메서드 사용 */}
            <ul className="todo-items">
                {
                    todos.map((todo) => (
                        // React list에서는 key를 반드시 설정해야 함 -> 오류 방지 및 성능 향상
                        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : undefined}`}>
                            <span className="todo-text">{todo.text}</span>
                            {/* 
                                삭제 버튼이 클릭되면(클릭 이벤트 발생 시) 실행 될 화살표 함수를 등록! 
                                이후 삭제 버튼을 클릭하면 함수 구현부에서 deleteTodo 함수를 실행하여 to do item을 삭제
                            */}
                            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>삭제</button>
                            {/* 
                                const deleteTodo = (id) => {
                                    console.log("삭제할 to do id : " + id);
                                }
                            */}
                        </li>
                    ))
                }
            </ul>

            {/* to do list가 비어 있을 때 아래를 보이도록 조건 처리 */}
            {todos.length === 0 && (<p className="empty-message">할 일이 없습니다!</p>)}

            <div className="debug">
                <p>총 할 일: {todos.length}개</p>
            </div>
        </div>
    );
}

export default TodoList;
