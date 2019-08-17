import {applyMiddleware, combineReducers, createStore} from 'redux';
import {todoViewReducer} from "./ToDoView/ToDoViewReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {loginReducer} from "./Login/LoginReducer";

const rootReducer = combineReducers({
    todoView: todoViewReducer,
    login: loginReducer
});

export type MainState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));
export default store;
