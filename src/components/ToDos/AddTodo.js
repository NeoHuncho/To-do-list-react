import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    //prevents the vanilla default submit action
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }
//the e.target.name is here so that imagine you had multiple fields, you would not have too make a onChange for each one, dont forget the BRACKETS!
  onChange = (e) => this.setState({ [e.target.name] : e.target.value });

  render() {
    return (
    <div className="addTodoCSS" >
     <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          className="typebox"
          name="title" 
          
          placeholder="Add Todo ..." 
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
        />
      </form>
    </div>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo