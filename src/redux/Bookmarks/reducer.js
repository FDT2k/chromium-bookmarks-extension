
import {ADD_BOOKMARK,SELECT_BOOKMARK} from './actions'
import selectReducer from './selectReducer';

const initialState = {
  list:[],
  byHash:{},
  selected:[],

}






export default (state=initialState,action)=>{
  switch(action.type){
    case ADD_BOOKMARK:
      return {
        ...state,
        list:[...state.list,action.payload],
        byHash:{...state.byHash,[action.payload.hash]:action.payload}
      }
    break
    case SELECT_BOOKMARK:
      return {...state,selected:selectReducer(state.selected,action)}
    break;
    default:
      return state;
  }
}
