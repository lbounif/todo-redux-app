import { SET_FILTER } from '../actions/actionTypes'
import { VISIBILITY_FILTERS} from '../../constants'

const defaultState = VISIBILITY_FILTERS.ALL

const filters = (state = defaultState, action) => {
    switch ( action.type ) {
        case SET_FILTER: {
            console.log(action.payload.filter)
            return action.payload.filter
        }
        default:
            return state

    }

}
export default filters

