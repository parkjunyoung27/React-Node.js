import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => { //전달하는 props 부분
    return(
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem 
                    todo={todo} 
                    key={todo.id} 
                    onRemove={onRemove}
                    onToggle={onToggle}    
                />
            ))}
        </div>
    );
};

export default TodoList;