import Todo from './Todo'
import { useSelector } from "react-redux"

const TodoList = () => {
    // todos = [ { todoName: "task1", completed: false},
    //          { todoName: "task2", completed: true} ]
    const todos = useSelector(state => state.TodoList)
    return (
    <div className="todo-list">
        {todos && todos.length ?
            todos.map((item) => (
                <Todo 
                    todo={item}
                    key={`todo-${item.id}`}/>
            )) : "No Todos"}
    </div>
    )
}

export default TodoList