import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/ToDos/ToDos';
import AddTodo from './components/ToDos/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(res => this.setState({ todos: res.data }));
  }

  // Toggle Complete
  //receiving id from toDoItem onChange
  markComplete = id => {
    this.setState({
      //here the map function is going over each todos in the state and finds the Todo where the passed in ID from onChange is the same
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !/*=! means reverse bololean value*/ todo.completed;//Changes the completed property to the reverse
        }
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = id => {
    /*same as top but finds todo by id in axios  so that it is not stored anymore*/
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  // Add Todo
  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,//here we dont need to put title:title bc it is the same
        completed: false
      })
      .then(res => {
        res.data.id = uuid.v4();
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route // this is saying when browser is on the https with nothing after it all this should render 
              exact path="/" render={props => (
               //you use React.Fragment when you dont need something like a div
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} /> 
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                 
                </React.Fragment>
              )}
            />
            <Route /*when path is www.ex/about render component about*/path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;