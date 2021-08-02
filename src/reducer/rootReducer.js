import { combineReducers } from 'redux'

import formSlice from '../features/form/formSlice';

const rootReducer = combineReducers({
 // Define a top-level state field named `form`, handled by `formSlice`
 form: formSlice,
})

export default rootReducer