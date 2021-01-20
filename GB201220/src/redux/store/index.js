import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ChatReducer from '../reducers';

const store = createStore(
    ChatReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store