import React, { Component, PropTypes} from 'react';
import { Tasks } from '../api/tasks.js';

export default class Task extends Component {
  toggleChecked() {
    Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked}
    });
  }
  deleteTask() {
    Tasks.remove(this.props.task._id);
  }
	render() {
    return (
      <li>
        <button onClick={this.deleteTask.bind(this)}>&times;</button>
        <input type='checkbox' readOnly checked={this.props.task.checked}
          onClick={this.toggleChecked.bind(this)} />
        <span>{this.props.task.text}</span>
      </li>
    );
  }
}
Task.propTypes = {
  task: PropTypes.object.isRequired
};