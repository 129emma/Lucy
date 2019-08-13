import {applyMiddleware, createStore} from 'redux';
import Reducer from "./Reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleWare from "redux-saga";
import {rootSaga} from "./Saga";

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(Reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleWare)
));
sagaMiddleWare.run(rootSaga);
export default store;
