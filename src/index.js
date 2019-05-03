import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import reviewWidgetReducer from "./store/reducers/reviewWidget";
// import registerServiceWorker from "./registerServiceWorker";

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

/*
    I believe only one reducer is needed to complete the challenge
    If I were to implement the review snapshot (rollup) or Q&A components, those would each have a seperate reducer
*/
const rootReducer = combineReducers({
    reviewWidget: reviewWidgetReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
// registerServiceWorker();