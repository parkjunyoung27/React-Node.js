import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
      {
        id: 1,
        text: '리액트의 기초 알아보기',
        checked: true,
      },
      {
        id: 2,
        text: '컴포넌트 스타일링해 보기',
        checked: true,
      },
      {
        id: 3,
        text: '일정 관리 앱 만들어 보기',
        checked: false,
      },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기 

  const nextId = useRef(4);

  // 추가기능
  const onInsert = useCallback( // 재사용할 수 있도록
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false, 
      };
        setTodos(todos.concat(todo));
        nextId.current += 1; // nextId 1씩 더하기
    },
    [todos], //todos가 바뀔때마다 랜더링
  );

  // 제거기능
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos],
  );

  // 수정기능
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => 
          todo.id === id ? { ...todo, checked: !todo.checked } : todo, // 변화가 필요한 id만 효율적으로 
          )
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
