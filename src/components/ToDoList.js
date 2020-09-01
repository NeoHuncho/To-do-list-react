import React from 'react';
class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
    <div className="todo-container">
        <ul className="todo-list"></ul>
    </div> );
    }
}
 
export default ToDoList;