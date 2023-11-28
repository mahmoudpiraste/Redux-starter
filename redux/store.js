import React from "react";
import { createStore } from "redux";
import rootReducer from "./rootReduser";
import ReduxThunk from "redux-thunk"

const store = createStore(rootReducer,{ReduxThunk});
export default store;



// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()