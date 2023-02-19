import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit"; // 리덕스 개발자 도구
import stockReducer from './reducers/stockCounterReducer';
import goodsReducer from './reducers/goodsCounterReducer';

const store = configureStore({
    reducer: {
        goodsReducer,
        stockReducer
    },
});

console.log(store.getState());

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App tab="home"/>
    </Provider>
);