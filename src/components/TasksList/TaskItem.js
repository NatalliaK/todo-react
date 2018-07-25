import React from 'react';

export default (props) => {
	console.log(props);
	return (
	<tr>
		<td>
			<input type="checkbox" />
		</td>
		<td>
			{props.title}
		</td>
		<td>
			{props.priority}
		</td>
		<td>
			{props.date}
		</td>
	</tr>
)}