
import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../redux/actions/actions";
import { VISIBILITY_FILTERS } from "../constants";

const Filters = () => {
   // Object.keys(VISIBILITY_FILTERS) = [ 'ALL', 'COMPLETED', 'INCOMPLETE' ]
   const activeFilter = useSelector(state=> state.filters)
   const dispatch = useDispatch()
    return (
        <div className="visibility-filters">
            {
                 Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                     const currentFilter = VISIBILITY_FILTERS[filterKey] // "all" or "completed" or incomplete
                     return (
                         <span
                            key={`visibility-filter-${currentFilter}`}
                            className= {
                                cn("filter",
                                currentFilter === activeFilter && "filter-active")
                            }
                            onClick={()=> {
                                dispatch(setFilters(currentFilter))
                            }}
                            >
                             {currentFilter}
                         </span>
                     )
                 }
                )
            }
        
        </div>
    )
}
export default Filters