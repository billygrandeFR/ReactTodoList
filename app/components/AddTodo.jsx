var React = require('react');

var AddTodo = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var text = this.refs.formtext.value;
    if (text.length > 0) {
      this.refs.formtext.value = '';
      this.props.onTodo(text);
    } else {
      this.refs.formtext.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div><input type="text" ref="formtext" placeholder="Add Todo..."/></div>
          <div><button className="button expanded">Add Todo</button></div>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
