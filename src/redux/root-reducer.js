import { combineReducers } from 'redux'

import countReducer from './count/reducer'

const rootReducer = combineReducers({
   countReducer,
   // insert other reducers...
})

export default rootReducer