import {ActionTypes, ADD_ITEM_TO_LIST, CHANGE_INPUT_VALUE, DELETE_ITEM_FROM_LIST} from "./ActionTypes";

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