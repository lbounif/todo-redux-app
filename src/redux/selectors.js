export const getTodoById = (store, id) => {
    return {
        ...store.todo[id], id
    }
}
export const getTodoList = store => store.todoList

/* Select from store combining information of multiple reducers */
export const getTodos = store => {
    return getTodoList(store).map(id => getTodoById(store, id))
}

//Add return in getTodos

