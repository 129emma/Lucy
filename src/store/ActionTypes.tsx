export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';

export interface InputType {
    type: typeof CHANGE_INPUT_VALUE,
    value: string
}

export interface AddItemType {
    type: typeof ADD_ITEM_TO_LIST,

}

export type ActionTypes = InputType | AddItemType;