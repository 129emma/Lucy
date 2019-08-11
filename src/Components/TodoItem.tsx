import * as React from 'react';
import DeleteIcon from '@material-ui/icons/CloseOutlined';
import {ListItem, ListItemText} from "@material-ui/core";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

interface Props {
    itemText: string,
    id: number,
    onDeleteItem: (id: number) => void,
}

const TodoItem: React.FunctionComponent<Props> = (props) => {

    const onDelete= () => {
        props.onDeleteItem(props.id)
    };

    return (
        <ListItem>
            <ListItemText primary={props.itemText}/>
            <ListItemSecondaryAction>
                <DeleteIcon  onClick={onDelete}/>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default TodoItem;