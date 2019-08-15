import {ItemTypes} from "../../Types/Types";

export const INIT_LIST_DATA = 'INIT_LIST_DATA';
export const DELETE_ITEM_FROM_LIST = 'DELETE_ITEM_FROM_LIST';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const ADD_INPUT_ITEM_TO_LIST = 'ADD_INPUT_ITEM_TO_LIST';

export interface InputType {
    type: typeof CHANGE_INPUT_VALUE,
    value: string
}

export interface AddInputItemToListType {
    type: typeof ADD_INPUT_ITEM_TO_LIST,
}


export interface InitialListType {
    type: typeof INIT_LIST_DATA,
    initialData: ItemTypes[]
}

export interface DeleteItemFromListType {
    type: typeof DELETE_ITEM_FROM_LIST,
    deleteId: number
}

export type ListActionTypes = InitialListType | DeleteItemFromListType;

export type ToDoViewActionTypes = InputType | AddInputItemToListType | ListActionTypes;