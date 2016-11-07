import React, { Component } from 'react';
import Task from './Task.jsx';

export default class App extends Component {
	getTasks() {
    return [
      {_id: 1, text: 'List 1'},
      {_id: 2, text: 'List 2'},
      {_id: 3, text: 'List 3'}
    ];
  }
  renderTasks() {
    return this.getTasks().map(task => (
      <Task key={task._id} task={task}></Task>));
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}