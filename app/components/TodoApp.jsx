var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require ('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id:1,
          text: 'Walk the dog'
        },
        {
          id:2,
          text: 'Clean the yard'
        }
      ]
    };
  },
  handleAddTodo: function(text){
    
    alert (
      'New Todo: ' + text
    );
  },
  render: function () {
    var {todos} = this.state;


    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onTodo={this.handleAddTodo}/>
      </div>
    )
  }

});

module.exports = TodoApp;