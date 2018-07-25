import React, { Component } from 'react';
//import './style.css';
import TaskItem from './TaskItem';

export default class TaskList extends Component {
	render() {
		console.log(this.props.tasks);
		return <table>
			<thead>
				<tr>
					<th>
						<span>Done</span>
						<span>
							<button>&#11014;</button>
							<button>&#11015;</button>
						</span>
					</th>
					<th>
						<span>Title</span>
						<span>
							<button>&#11014;</button>
							<button>&#11015;</button>
						</span>
					</th>
					<th>
						<span>Priority</span>
						<span>
							<button>&#11014;</button>
							<button>&#11015;</button>
						</span>
					</th>
					<th>
						<span>Date</span>
						<span>
							<button>&#11014;</button>
							<button>&#11015;</button>
						</span>
					</th>
				</tr>
			</thead>
			<tbody>
				{this.props.tasks.map((elem, i) =>
					<TaskItem key={elem.id}{...elem.tasks} />
				)}
			</tbody>
		</table>
	}
}
