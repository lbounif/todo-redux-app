import Todo from './Todo'
import { useSelector } from "react-redux"
import { getTodos } from '../redux/selectors'
import { VISIBILITY_FILTERS } from "../constants"

const TodoList = () => {
    const filters = useSelector(state => state.filters)
    const allTodos = useSelector(getTodos)

    console.log("allTodos: ", allTodos)
    /*
        if visibilityFilter === "all" {
            todos = allTodos
        }
        else if (visibilityFilter === "completed") {
            todos = allTodos.filter(todo => todo.completed)
        }
        else {
            todos = allTodos.filter(todo => !todo.completed)
        }
     */
    //COMPLETED not completed
    const todos = 
            filters === VISIBILITY_FILTERS.ALL
            ? allTodos
            : filters === VISIBILITY_FILTERS.COMPLETED
            ? allTodos.filter(todo => todo.completed)
            : allTodos.filter(todo => !todo.completed)
    
            console.log("todos: ", todos)

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