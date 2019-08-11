export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';
export const DELETE_ITEM_FROM_LIST = 'DELETE_ITEM_FROM_LIST';

export interface InputType {
    type: typeof CHANGE_INPUT_VALUE,
    value: string
}

export interface AddItemType {
    type: typeof ADD_ITEM_TO_LIST,
}

export interface DeleteItemType {
    type: typeof DELETE_ITEM_FROM_LIST,
    deleteId: number
}

export type ActionTypes = InputType | AddItemType | DeleteItemType;