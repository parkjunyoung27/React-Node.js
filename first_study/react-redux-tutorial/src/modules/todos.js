const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
};

function todos(state = initialState, action){
    switch(action.type){
        case CHANGE_INPUT:
            return{
                ...state,
                input: action.input
            };
        case INSERT:
            return{
                ...state,
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return{
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? {...todo, done: !todo.done } : todo
                    )
            };
        case REMOVE:
            return{
                ...state,
                todos: state.todos.fillter(todo => todo.id !== action.id)
            };            
        default:
            return state;
    }
}

export default todos;


