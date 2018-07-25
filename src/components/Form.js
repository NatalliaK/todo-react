import React, { Component } from 'react';

export default class Form extends Component {
	onSubmit = e => {
		e.preventDefault();
		if (e.target.querySelector('[name]').value) {
			let title = e.target.querySelector('[name]').value;
			let date = e.target.querySelector('#date').value || this.addCurrentDate();
			let priority = e.target.querySelector('#priority').options[e.target.querySelector('#priority').selectedIndex].value;
			let description = e.target.querySelector('#description').value || 'No description';
			let task = {title, description, priority, date};
			this.props.addTaskByTable(task);
			e.target.reset();
		} else {
			alert('Add task title');
		}
	};

	addCurrentDate = () => {
		let currentDate = new Date();
		let year = currentDate.getFullYear();

		var writeFullDate = value => {
			return value < 10 ? '0' + value : value;
		};

		let month = writeFullDate(currentDate.getMonth());
		let day = writeFullDate(currentDate.getDay());

		return year + '-' + month + '-' + day;
	};

	render() {
		return <form onSubmit={this.onSubmit}>
			<legend>Add your task</legend>
			<fieldset>
				<label>
					<span>Title</span>
					<input type="text" name="title" placeholder="Title"/>
				</label>
				<label>
					<span>Priority</span>
					<select name="priority" id="priority">
						<option value="high">High</option>
						<option value="medium">Medium</option>
						<option value="low">Low</option>
					</select>
				</label>
				<label>
					<span>Date</span>
					<input id="date" type="date" />
				</label>
				<label>
					<span>Description</span>
					<textarea name="description" id="description" cols="30" rows="10" placeholder="Add description"></textarea>
				</label>
				<button type="submit">Add</button>
			</fieldset>
		</form>
	}
}