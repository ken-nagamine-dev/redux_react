import countActionTypes from './actions-types'

const initialState = {
   currentCount: 0
}

const countReducer = (state = initialState, action) => {
   switch(action.type){
      case countActionTypes.INCREMENT:
         return { ...state, currentCount:  state.currentCount + 1}
      case countActionTypes.DECREMENT:
         return { ...state, currentCount: state.currentCount - 1}
      default:
         return state
   }
}

export default countReducer