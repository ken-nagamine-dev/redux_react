import countActionType from "./actions-types"

export const incrementCount = () => ({
   type: countActionType.INCREMENT
})

export const decrementCount = () => ({
   type: countActionType.DECREMENT
})