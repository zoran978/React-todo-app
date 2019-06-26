import React from 'react';

class ToDoItem extends React.Component {
    getStyle = () => {
        return {
            backgroundColor: 'lightblue',
            padding: '10px',
            borderBottom: '1px solid grey',
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }
    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()} className="todoitem">
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    <p>{title}</p>
                    <button className="btn" onClick={this.props.deleteToDo.bind(this, id)}>X</button>
            </div>
            )
        }
    }
    
    export default ToDoItem;
