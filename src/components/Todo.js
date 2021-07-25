import { useDispatch } from 'react-redux'
import { toggleTodo } from '../redux/actions/actions'
import cn from "classnames"

const Todo = ({todo}) => {
    const dispatch = useDispatch()
    return (
        <div onClick={()=> dispatch(toggleTodo(todo.id))}>
            {/* completed=== true 👌
            completed=== false 👋 */}
            {todo && todo.completed === true ? "👌 ": "👋 " }  
               {/* 1. by default: className is "todo-item"
                   2. if todo is not null and todo.completed === true
                   className will be "todo-item--completed"  */}
            <span className={cn(
                "todo-item",
                todo && todo.completed && "todo-item--completed"
            )}>
                {todo.todoName}
            </span>
        </div>
    )
}
export default Todo