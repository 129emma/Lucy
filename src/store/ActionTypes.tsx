export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export interface InputType {
    type: typeof CHANGE_INPUT_VALUE,
    value: string
}

export type ActionTypes = InputType;