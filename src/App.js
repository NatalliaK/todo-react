import React, { Component } from 'react';
import Form from './components/Form';
import TaskList from './components/TasksList/index';
import {addTask} from './api';
import {getTasks} from './api';

export default class App extends Component {
	state = {
		tasks: []
	}

	componentDidMount = () => {
		getTasks()
			.then(list => this.setState({
				tasks: list
			}))
	}

	addTaskByTable = (tasks) => {
		addTask({tasks})
			.then( task => {
				this.setState({
					tasks: [...this.state.tasks, task]
				})
			});
	}

	filterTasks = () => {
		let tasks = this.state.tasks;
		console.log(tasks);
		return tasks;
	}

  render() {
    return (
			<div>
				<Form addTaskByTable={this.addTaskByTable} />
				<TaskList tasks={this.filterTasks()}/>
			</div>
    );
  }
}
