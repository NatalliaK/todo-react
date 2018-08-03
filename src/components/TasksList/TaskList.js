import React, { Component } from 'react';

import taskList from '../../decorators/taskList';
import TaskHeader from './TaskHeader';
import TaskItem from './TaskItem';

class TaskList extends Component {
	render() {
		return (
			<table className="table">
			<TaskHeader sortTasks={this.props.sortTasks} />
			<tbody>
			{this.props.tasks.map((elem, i) =>
				<TaskItem key={elem.id}{...elem} toggleDone={this.props.toggleDone} defaultChecked={elem.done} />
			)}
			</tbody>
		</table>
		)
	}
}

export default taskList(TaskList);