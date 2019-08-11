import {ItemTypes} from "../Types/Types";
import {ActionTypes, CHANGE_INPUT_VALUE} from "./ActionTypes";

interface List {
    inputValue: string,
    list: ItemTypes[]
}

const defaultState:List = {
    inputValue: 'testInputValue',
    list:[{itemText:'te',itemId:2},{itemText:'sd',itemId:3}]
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
    return state;
}