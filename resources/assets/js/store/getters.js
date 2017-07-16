export default {

	tasks(state) {
		return state.tasks;
	},

	completeTasks(state) {
		return state.tasks.filter(task => task.complete);
	},

	incompleteTasks(state) {
		return state.tasks.filter(task => ! task.complete);
	}
}