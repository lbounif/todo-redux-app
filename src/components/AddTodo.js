import { useDispatch } from "react-redux"
import { useState } from "react"
import { addTodo } from "../redux/actions/actions"

const AddTodo = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState(undefined)
    return (
        <div className="add-to-do">
            <input onChange={e => setInput(e.target.value)} />
            <button className="add-todo" onClick={()=> dispatch(addTodo(input))}>
                Add Todo
            </button>
        </div>
    )
}

export default AddTodo