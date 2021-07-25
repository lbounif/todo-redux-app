import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes'

const defaultState = {}

// state = 
// [ { todoName: "task1", completed: false},
// { todoName: "task2", completed: false} ]
const todo = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const { id, todoName } = action.payload
            return {
                ...state,
                [id]: {
                    todoName,
                    completed: false
                }
            }

        }
        case TOGGLE_TODO: {
            // state = 
            // [ { todoName: "task1", completed: false},
            // { todoName: "task2", completed: false} ]
            const { id } = action.payload
            //id = 0
            const currentTodo = state[id] 
            //currentTodo= { todoName: "task1", completed: false}
            return {
                ...state,
                [id]: {...currentTodo, completed: !currentTodo.completed}
            }
            // state = 
            // [ { todoName: "task1", completed: true},
            // { todoName: "task2", completed: false} ]

        }
        default:
            return state
    }
}
export default todo