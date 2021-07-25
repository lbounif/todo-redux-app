import { ADD_TODO, TOGGLE_TODO, SET_FILTER} from './actionTypes'

let nextTodoId = 0
export const addTodo = todoName => {
    return {
        type: ADD_TODO,
        payload : {
            id: ++nextTodoId,
            todoName
        }
    }
}
export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}
export const setFilters = filter => {
    return {
        type: SET_FILTER,
        payload: {
            filter
        }
    }
}