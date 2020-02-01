import "./globals";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {RouterComponent} from "./router";
import './css/utils/base.scss';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <RouterComponent />
    </Provider>,
    document.getElementById("app")
);
