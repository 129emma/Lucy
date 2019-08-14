import {ItemTypes} from "../../Types/Types";

export const INIT_LIST_DATA = 'INIT_LIST_DATA';
export const DELETE_ITEM_FROM_LIST = 'DELETE_ITEM_FROM_LIST';

export interface InitialListType {
    type: typeof INIT_LIST_DATA,
    initialData: ItemTypes[]
}

export interface DeleteItemFromListType {
    type: typeof DELETE_ITEM_FROM_LIST,
    deleteId: number
}

export type ListActionTypes = InitialListType | DeleteItemFromListType;