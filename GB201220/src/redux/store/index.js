import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ChatReducer from '../reducers';
// import reloadState from "../state";

const store = createStore(
    ChatReducer,
    // reloadState,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;