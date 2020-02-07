import {ADD_BOOKMARK,SELECT_BOOKMARK} from './actions'

const initialState = []

export default (state=initialState,action)=>{
  switch(action.type){
    case SELECT_BOOKMARK:
      return [...state,action.payload];
    break;
    default:
      return state;
  }
}
