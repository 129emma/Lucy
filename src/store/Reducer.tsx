import {ItemTypes} from "../Types/Types";
import {ActionTypes, ADD_ITEM_TO_LIST, CHANGE_INPUT_VALUE, DELETE_ITEM_FROM_LIST, INIT_LIST_DATA} from "./ActionTypes";

interface List {
    inputValue: string,
    list: ItemTypes[]
}

const defaultState: List = {
    inputValue: '',
    list: []
};

// Reducer only can accept state, it shouldn't modify state
export default (state = defaultState, action: ActionTypes) => {
    if (action.type === CHANGE_INPUT_VALUE) {

        // replace old state
        const newState: List = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;

        // return newState to store
        return newState;
    }

    if (action.type === ADD_ITEM_TO_LIST) {
        const newState: List = JSON.parse(JSON.stringify(state));

        newState.list.push({
            itemText: newState.inputValue,
            id: Math.round(Math.random() * 100) * 3
        });
        newState.inputValue = '';

        return newState;
    }

    if (action.type === DELETE_ITEM_FROM_LIST) {
        const newState: List = JSON.parse(JSON.stringify(state));

        newState.list.splice(newState.list.findIndex(item => item.id === action.deleteId), 1);

        console.log(newState.list);
        return newState;
    }

    if (action.type === INIT_LIST_DATA) {
        const newState: List = JSON.parse(JSON.stringify(state));
        newState.list = action.initialData;

        return newState;
    }

    return state;
}