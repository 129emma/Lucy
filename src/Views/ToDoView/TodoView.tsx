import * as React from 'react';
import {Input} from "@material-ui/core";
import {ItemTypes} from "../../Types/Types";
import TodoList from "../../Components/TodoList";
import {MainState} from "../../store/Store";
import {addInputItemToList, changeInputValue, getInitialListData, deleteItemFromList} from "../../store/ToDoView/ToDoViewActions";
import {connect} from "react-redux";

interface State {
    itemList: ItemTypes[],
    inputValue: string
}

interface Props {
    changeInputValue: typeof changeInputValue,
    addInputItemToList: typeof addInputItemToList,
    getInitialListData: typeof getInitialListData,
    deleteItemFromList: typeof deleteItemFromList,
    inputValue: string,
    itemList: ItemTypes[]
}

class TodoView extends React.Component<Props, State> {

    public constructor(props:Props){
        super(props);
        this.state = {
            inputValue:"",
            itemList:[]
        }
    }

    public render(): React.ReactNode {
        return (
            <div>

                <Input value={this.props.inputValue} placeholder={"type item"} onKeyPress={this.handleKeyPress} onChange={this.handleInput}/>
                {this.props.itemList.length > 0
                    ? <TodoList items={this.props.itemList} onDeleteItem={this.handleDelete}/>
                    : null
                }
            </div>
        )
    }

    private handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            this.props.addInputItemToList()
        }
    };

    private handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.changeInputValue(e.target.value)
    };

    private handleDelete = (id: number) => {
        this.props.deleteItemFromList(id);
    };
}

const mapStateToProps = (state: MainState) => {
    return {
        inputValue:state.todoView.inputValue,
        itemList:state.todoView.itemList
    }
};

const mapDispatchToProps = {
    changeInputValue,
    addInputItemToList,
    getInitialListData,
    deleteItemFromList
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoView);