import * as React from 'react';
import {ItemTypes} from "../Types/Types";
import {List} from "@material-ui/core";
import TodoItem from "./TodoItem";

interface Props {
    items: ItemTypes[],
    onDeleteItem: (id: number) => void
}



const TodoList: React.FunctionComponent<Props> = (props) => {


    return (
        <List>
            {props.items.map(todoItems => {
                    return <TodoItem key={todoItems.id}
                                     id={todoItems.id}
                                     itemText={todoItems.itemText}
                                     onDeleteItem={props.onDeleteItem}/>
                }
            )}
        </List>
    )
};

export default TodoList;