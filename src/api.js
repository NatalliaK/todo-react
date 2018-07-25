let list = [];

export function addTask(task) {
	let newTask = {
		id: Date.now(),
		...task
	};

	list.push(newTask);

	const promise = new Promise(resolve => {
		resolve(localStorage.setItem(`tasks`, JSON.stringify(list)));
	});

	return promise.then(_ => Promise.resolve(newTask));
}

export function getTasks() {
	return Promise.resolve(JSON.parse(localStorage.getItem('tasks')) || []);
}
