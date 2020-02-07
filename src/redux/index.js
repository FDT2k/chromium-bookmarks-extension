import {combineReducers} from 'redux'

import createStore from 'redux/store';


import BMReducer from 'redux/Bookmarks/reducer'

const reducers =combineReducers({
  bookmarks:BMReducer
})



export default createStore({})(reducers)
