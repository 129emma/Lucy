import {ToDoViewActionTypes, ADD_INPUT_ITEM_TO_LIST, CHANGE_INPUT_VALUE} from "./ToDoViewActionTypes";

export const changeInputValue = (value: string): ToDoViewActionTypes => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const addInputItemToList = (): ToDoViewActionTypes => ({
    type: ADD_INPUT_ITEM_TO_LIST
});






