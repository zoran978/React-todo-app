import React from 'react';
import ToDoItem from "./TodoItem"

class ToDo extends React.Component {
    render() {
        return this.props.todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteToDo={this.props.deleteToDo}/>
        ))
    }
}

export default ToDo;
