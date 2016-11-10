import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false
    }
  }
  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted
    });
  }
  renderTasks() {
    let filteredTasks = this.props.tasks;
    if(this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map(task => (
      <Task key={task._id} task={task}></Task>));
  }
  handleSubmit(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    Tasks.insert({
      text,
      createdAt: new Date()
    });
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  render() {
    return (
      <div>
        <label>
          <input type='checkbox' readOnly checked={this.state.hideCompleted}
          onClick={this.toggleHideCompleted.bind(this)} />
          Hide Completed Tasks
        </label>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' placeholder='enter to do' ref='textInput' />
        </form>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default createContainer(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 }}).fetch()
  }
}, App)