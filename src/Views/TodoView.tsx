import * as React from 'react';
import {useEffect, useState} from 'react';
import {Input} from "@material-ui/core";
import {ItemTypes} from "../Types/Types";
import TodoList from "../Components/TodoList";
import store from "../store/Store";
import {addItemToList, changeInputValue, deleteItemFromList} from "../store/ActionCreator";

const TodoView: React.FunctionComponent = () => {

    useEffect(() => {
        // Listen data change in store
        store.subscribe(handleStoreChange);
    }, []);

    const [itemList, setItemList] = useState<ItemTypes[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            const action = addItemToList();
            store.dispatch(action);
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const action = changeInputValue(e.target.value);
        // Dispatch action to store
        store.dispatch(action);
    };

    const handleDelete = (id: number) => {
        const action = deleteItemFromList(id);
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