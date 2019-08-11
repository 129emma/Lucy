import {ItemTypes} from "../Types/Types";

interface List {
    inputValue: string,
    list: ItemTypes[]
}

const defaultState:List = {
    inputValue: '',
    list:[{itemText:'te',itemId:2},{itemText:'sd',itemId:3}]
};

export default (state = defaultState, action:any) => {
    return state;
}