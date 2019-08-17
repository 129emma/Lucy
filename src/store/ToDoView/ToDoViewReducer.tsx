import {InputTypes, ItemList} from "../../Types/Types";
import {ToDoViewActionTypes} from "./ToDoViewActionTypes";

type reducerTypes = ItemList & InputTypes;
export const defaultState: reducerTypes = {
    inputValue: '',
    itemList: []
};

// Reducer only can accept state, it shouldn't modify state
export function todoViewReducer(state = defaultState, action: ToDoViewActionTypes) {
    switch (action.type) {
        case "INIT_LIST_DATA":
            const listState: reducerTypes = JSON.parse(JSON.stringify(state));
            listState.itemList = action.initialData;

            return listState;
        case "DELETE_ITEM_FROM_LIST":
            const deleteState: reducerTypes = JSON.parse(JSON.stringify(state));
            deleteState.itemList.splice(deleteState.itemList.findIndex(item => item.id === action.deleteId), 1);

            return deleteState;

        case "ADD_INPUT_ITEM_TO_LIST":
            const inputState: reducerTypes = JSON.parse(JSON.stringify(state));

            inputState.itemList!.push({
                itemText: inputState.inputValue!,
                id: Math.round(Math.random() * 100) * 3
            });
            inputState.inputValue = '';
            console.log(inputState);
            return inputState;
        case "CHANGE_INPUT_VALUE":
            // replace old state
            const changeInputState: reducerTypes = JSON.parse(JSON.stringify(state));
            changeInputState.inputValue = action.value;

            // return newState to store
            return changeInputState;
        default:
            return state;
    }
}