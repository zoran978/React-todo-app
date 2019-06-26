import React from 'react';
import ToDo from "./Components/ToDo"
import Header from "./Components/Header"
import Add from "./Components/AddToDo"
import About from "./Components/About"
import uuid from "uuid"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  //states are in the main app file//
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Learn React',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Learn Vue',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Learn Angular',
        completed: false
      },
    ]
  }
  //toggle comlete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }
  deleteToDo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }
  addToDo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    return (
      <Router>
        <div className="container">

          <Header />

          <Route exact path="/" render={props => (<React.Fragment>
            <Add addToDo={this.addToDo} />
            <ToDo todos={this.state.todos} markComplete={this.markComplete} deleteToDo={this.deleteToDo} />
          </React.Fragment>)} />

          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App;
