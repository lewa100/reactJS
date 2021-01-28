import { default as ChatReducer } from './ChatReducer'
import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    ChatReducer
})
export default rootReducer;