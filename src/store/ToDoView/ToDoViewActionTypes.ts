export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const ADD_INPUT_ITEM_TO_LIST = 'ADD_INPUT_ITEM_TO_LIST';

export interface InputType {
    type: typeof CHANGE_INPUT_VALUE,
    value: string
}

export interface AddInputItemToListType {
    type: typeof ADD_INPUT_ITEM_TO_LIST,
}

export type ToDoViewActionTypes = InputType | AddInputItemToListType;