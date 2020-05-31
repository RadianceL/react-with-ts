import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import store from './store/ApplicationCenterStore';
import {Provider} from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
