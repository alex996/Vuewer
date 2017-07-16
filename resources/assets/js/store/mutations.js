export default {

	setTasks(state, tasks) {
		state.tasks = tasks;
	},

	createTask(state, task) {
		state.tasks.push(task);
	},

	updateTask(state, task) {
		state.tasks.map(someTask => {
			if (someTask.id === task.id) {
				someTask = task;
			}

			return someTask;
		})
	},

	deleteTask(state, task) {
		state.tasks = state.tasks.filter(someTask => someTask.id !== task.id);
	}
}