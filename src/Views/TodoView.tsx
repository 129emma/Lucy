import * as React from 'react';
import {Input} from "@material-ui/core";
import {ItemTypes} from "../Types/Types";
import {useEffect, useState} from "react";
import TodoList from "../Components/TodoList";
import store from "../store/Store";

const TodoView: React.FunctionComponent = () => {

    useEffect(() => {
        setItemList(store.getState().list)
    },[]);

    const [itemList, setItemList] = useState<ItemTypes[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {

    };

    const handleDelete= () => {

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