import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import middlewares from '../middlewares';
// import thunk from 'redux-thunk';
import initReducers from '../reducers';
// import reloadState from "../state";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'geekmessanger',
    storage,
    whitelist: ['ChatReducer']
};

export const history = createBrowserHistory()

function initStore() {
    const innitialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initReducers(history)),
        innitialStore,
        composeWithDevTools(
            applyMiddleware(routerMiddleware(history),
                ...middlewares)
        )
    );
    const persistor = persistStore(store);
    return { store, persistor };
}
export default initStore;