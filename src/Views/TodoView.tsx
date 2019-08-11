import * as React from 'react';
import {useEffect, useState} from 'react';
import {Input} from "@material-ui/core";
import {ItemTypes} from "../Types/Types";
import TodoList from "../Components/TodoList";
import store from "../store/Store";
import {ActionTypes, ADD_ITEM_TO_LIST, CHANGE_INPUT_VALUE, DELETE_ITEM_FROM_LIST} from "../store/ActionTypes";

const TodoView: React.FunctionComponent = () => {

    useEffect(() => {
        // Listen data change in store
        store.subscribe(handleStoreChange);
    }, []);

    const [itemList, setItemList] = useState<ItemTypes[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            const action: ActionTypes = {
                type: ADD_ITEM_TO_LIST
            };
            store.dispatch(action);
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const action: ActionTypes = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        };
        // Dispatch action to store
        store.dispatch(action);
    };

    const handleDelete = (id: number) => {
        const action: ActionTypes = {
            type: DELETE_ITEM_FROM_LIST,
            deleteId: id
        };
        store.dispatch(action);
    };

    const handleStoreChange = () => {
        // Get data from store and set as new state
        setItemList(store.getState().list);
        setInputValue(store.getState().inputValue);
    };

    return (
        <div>

            <Input value={inputValue} placeholder={"type item"} onKeyPress={handleKeyPress} onChange={handleInput}/>
            {itemList.length > 0
                ? <TodoList items={itemList} onDeleteItem={handleDelete}/>
                : null
            }
        </div>
    )
};

export default TodoView