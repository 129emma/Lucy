import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TodoView from "./Views/ToDoView/TodoView";
import {Provider} from "react-redux";
import store from "./store/Store";

const App = (
    // Connect store
    <Provider store={store} ><TodoView /></Provider>
);

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
