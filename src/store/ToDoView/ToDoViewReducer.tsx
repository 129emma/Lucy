import {InputTypes, ItemList, ItemTypes} from "../../Types/Types";
import {ToDoViewActionTypes, ADD_INPUT_ITEM_TO_LIST, CHANGE_INPUT_VALUE} from "./ToDoViewActionTypes";

type reducerTypes = ItemList & InputTypes;
export const defaultState: reducerTypes = {
    inputValue: '',
    itemList:[]
};

// Reducer only can accept state, it shouldn't modify state
export function todoViewReducer (state = defaultState, action: ToDoViewActionTypes){
    if (action.type === CHANGE_INPUT_VALUE) {

        // replace old state
        const newState: reducerTypes = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;

        // return newState to store
        return newState;
    }

    if (action.type === ADD_INPUT_ITEM_TO_LIST) {
        const newState: reducerTypes = JSON.parse(JSON.stringify(state));

        newState.itemList!.push({
            itemText: newState.inputValue!,
            id: Math.round(Math.random() * 100) * 3
        });
        newState.inputValue = '';

        return newState;
    }
    return state;
}