import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router.jsx';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store";

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
                <Router/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);