import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";

import store from "./store"
import App from "./app";
import "@styles/index.less"
// import 'react-animated-router/animate.css'; // 引入组件切换动画css

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById("root"))
