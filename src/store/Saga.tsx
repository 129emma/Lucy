import {takeEvery, fork, all, put} from 'redux-saga/effects';
import {GET_INIT_LIST_DATA} from "./ActionTypes";
import axios from "axios";
import {initListData} from "./ActionCreator";

function* getInitList() {
    try {
        //api request
        const res= yield axios.get('/api.json');
        const action = initListData(res.data);
        // pass data to reducer
        yield put(action);
    }catch (e) {
        console.log(e)
    }
}

function* monitorInitList() {
    yield takeEvery(GET_INIT_LIST_DATA, getInitList);
}

// generator function
export const rootSaga = function* mySaga() {
    yield all([fork(monitorInitList)])
};
