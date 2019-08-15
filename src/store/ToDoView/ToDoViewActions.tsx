import {
    ToDoViewActionTypes,
    ADD_INPUT_ITEM_TO_LIST,
    CHANGE_INPUT_VALUE,
    INIT_LIST_DATA,
    DELETE_ITEM_FROM_LIST
} from "./ToDoViewActionTypes";
import {ItemTypes} from "../../Types/Types";

export const changeInputValue = (value: string): ToDoViewActionTypes => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const addInputItemToList = (): ToDoViewActionTypes => ({
    type: ADD_INPUT_ITEM_TO_LIST
});

export const getInitialListData = (data: ItemTypes[]): ToDoViewActionTypes => ({
    type: INIT_LIST_DATA,
    initialData: data
});

export const deleteItemFromList = (deleteId: number): ToDoViewActionTypes => ({
    type: DELETE_ITEM_FROM_LIST,
    deleteId
});





