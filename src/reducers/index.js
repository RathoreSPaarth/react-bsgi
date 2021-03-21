import {combineReducers} from 'redux'
import isClickedReducer from './isClickedReducer'
import TextAreaReducer from './textAreaReducer'
import clickAction from './clickActionReducer'
const allReducers = combineReducers({
    isClickedReducer: isClickedReducer,
    TextAreaReducer : TextAreaReducer,
    clickAction : clickAction

})

export default allReducers;