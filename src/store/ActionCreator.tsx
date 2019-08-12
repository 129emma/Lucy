import {ActionTypes, ADD_ITEM_TO_LIST, CHANGE_INPUT_VALUE, DELETE_ITEM_FROM_LIST, INIT_LIST_DATA} from "./ActionTypes";
import {ItemTypes} from "../Types/Types";
import axios from "axios";
import store from "./Store";
import {Dispatch} from "redux";

export const changeInputValue = (value: string): ActionTypes => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const addItemToList = (): ActionTypes => ({
    type: ADD_ITEM_TO_LIST
});

export const deleteItemFromList = (deleteId: number): ActionTypes => ({
    type: DELETE_ITEM_FROM_LIST,
    deleteId
});

export const getInitialListData = (data: ItemTypes[]): ActionTypes => ({
    type: INIT_LIST_DATA,
    initialData: data
});

export const getInitialList = () => {
    return (dispatch: Dispatch) => {
        axios.get('/api.json').then((res) => {
            const data = res.data;
            const action = getInitialListData(data);
            dispatch(action);
        });
    }
};