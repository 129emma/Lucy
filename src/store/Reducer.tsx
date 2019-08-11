import {ItemTypes} from "../Types/Types";
import {ActionTypes, ADD_ITEM_TO_LIST, CHANGE_INPUT_VALUE} from "./ActionTypes";

interface List {
    inputValue: string,
    list: ItemTypes[]
}

const defaultState:List = {
    inputValue: '',
    list:[]
};

// Reducer only can accept state, it shouldn't modify state
export default (state = defaultState, action:ActionTypes) => {
    if (action.type === CHANGE_INPUT_VALUE){

        // replace old state
        const newState:List = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;

        // return newState to store
        return newState;
    }

    if (action.type === ADD_ITEM_TO_LIST) {
        const newState:List = JSON.parse(JSON.stringify(state));

        newState.list.push({
            itemText:newState.inputValue,
            id:Math.round(Math.random() * 100) * 3
        });
        newState.inputValue = '';

        return newState;
    }

    return state;
}