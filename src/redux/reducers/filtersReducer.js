import { SET_FILTER } from '../actions/actionTypes'

const VISIBILITY_FILTERS = {
    ALL: "all",
    COMPLETED: "completed",
    INCOMPLETE: "incomplete"
}
const defaultState = VISIBILITY_FILTERS.ALL

const filters = (state = defaultState, action) => {
    switch ( action.type ) {
        case SET_FILTER: {
            return action.payload.filter
        }
        default:
            return state

    }

}
export default filters

