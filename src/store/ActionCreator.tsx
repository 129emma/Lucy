import {
    ActionTypes,
    ADD_ITEM_TO_LIST,
    CHANGE_INPUT_VALUE,
    DELETE_ITEM_FROM_LIST,
    GET_INIT_LIST_DATA,
    INIT_LIST_DATA
} from "./ActionTypes";
import {ItemTypes} from "../Types/Types";

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

export const initListData = (data: ItemTypes[]): ActionTypes => ({
    type: INIT_LIST_DATA,
    initialData: data
});

export const getInitialList = (): ActionTypes => ({
    type: GET_INIT_LIST_DATA
});