import { combineReducers } from "redux"
import todo from "./todoReducer"
import todoList from "./todoListReducer"
import filters from "./filtersReducer"

export default combineReducers ({
    todo,
    todoList,
    filters
})