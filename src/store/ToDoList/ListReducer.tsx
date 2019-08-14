import {ItemList} from "../../Types/Types";
import {ListActionTypes} from "./ListActionTypes";

const initialList: ItemList = {
    itemList: []
};

export function listReducer(
    state = initialList,
    action: ListActionTypes
): ItemList {
    switch (action.type) {
        case "INIT_LIST_DATA":
            const listState: ItemList = JSON.parse(JSON.stringify(state));
            listState.itemList = action.initialData;

            return listState;
        case "DELETE_ITEM_FROM_LIST":
            const newState: ItemList = JSON.parse(JSON.stringify(state));
            newState.itemList.splice(newState.itemList.findIndex(item => item.id === action.deleteId), 1);

            return newState;
        default:
            return state;
    }
}