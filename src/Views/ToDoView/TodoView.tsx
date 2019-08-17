import * as React from 'react';
import {Button, Input} from "@material-ui/core";
import {ItemTypes} from "../../Types/Types";
import TodoList from "../../Components/TodoList";
import {MainState} from "../../store/Store";
import {addInputItemToList, changeInputValue, getInitialListData, deleteItemFromList} from "../../store/ToDoView/ToDoViewActions";
import {connect} from "react-redux";
import { getLoginStatus } from '../../store/Login/LoginActions';

interface State {
    itemList: ItemTypes[],
    inputValue: string,
    loginStatus: boolean,
}

interface Props {
    changeInputValue: typeof changeInputValue,
    addInputItemToList: typeof addInputItemToList,
    getInitialListData: typeof getInitialListData,
    deleteItemFromList: typeof deleteItemFromList,
    inputValue: string,
    itemList: ItemTypes[],
    loginStatus: boolean,
    getLoginStatus: typeof getLoginStatus
}

class TodoView extends React.Component<Props, State> {

    public constructor(props:Props){
        super(props);
        this.state = {
            inputValue:"",
            itemList:[],
            loginStatus: false
        }
    }

    public render(): React.ReactNode {
        return (
            <div>

                <Input value={this.props.inputValue} placeholder={"type to do, press Enter to save"} onKeyPress={this.handleKeyPress} onChange={this.handleInput}/>
                <Button onClick={this.handleClick}>Test Button</Button>
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

    private handleClick = () => {
        this.props.getLoginStatus(this.props.loginStatus)
    }
}

const mapStateToProps = (state: MainState) => {
    return {
        inputValue:state.todoView.inputValue,
        itemList:state.todoView.itemList,
        loginStatus:state.login.loginStatus
    }
};

const mapDispatchToProps = {
    changeInputValue,
    addInputItemToList,
    getInitialListData,
    deleteItemFromList,
    getLoginStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoView);