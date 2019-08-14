import {ItemTypes} from "../../Types/Types";
import {DELETE_ITEM_FROM_LIST, INIT_LIST_DATA, ListActionTypes} from "./ListActionTypes";
import {Dispatch} from "redux";
import axios from "axios";

export const getInitialListData = (data: ItemTypes[]): ListActionTypes => ({
    type: INIT_LIST_DATA,
    initialData: data
});

export const deleteItemFromList = (deleteId: number): ListActionTypes => ({
    type: DELETE_ITEM_FROM_LIST,
    deleteId
});

// export const getInitialList = () => {
//     return (dispatch: Dispatch) => {
//         axios.get('/api.json').then((res) => {
//             const data = res.data;
//             const action = getInitialListData(data);
//             dispatch(action);
//         });
//     }
// };