import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let state = {
	tasks: []
};

const getters = {

	tasks(state) {
		return state.tasks;
	},

	completeTasks(state) {
		return state.tasks.filter(task => task.complete);
	},

	incompleteTasks() {
		return state.tasks.filter(task => ! task.complete);
	}
}

const mutations = {

	setTasks(state, tasks) {
		state.tasks = tasks;
	},

	createTask(state, task) {
		state.tasks.push(task);
	},

	updateTask(state, task) {
		//
	},

	deleteTask(state, task) {
		state.tasks = state.tasks.filter(someTask => someTask.id !== task.id);
	}
}

const actions = {

	loadTasks(context) {
		axios.get('/api/v1/tasks')
			.then(response => {
				context.commit('setTasks', response.data);
			})
			.catch(error => {
				alert(error.response.data);
			});		
	},

	createTask(context, task) {
		axios.post('/api/v1/tasks', task)
			.then(response => {
				context.commit('createTask', response.data);
			})
			.catch(error => {
				alert(error.response.data);
			});
	},

	updateTask(context, task) {
		axios.put('/api/v1/tasks/' + task.id, task)
			.then(response => {
				//context.commit('updateTask', response.data);
			})
			.catch(error => {
				alert(error.response.data);
			});
	},

	deleteTask(context, task) {
		axios.delete('/api/v1/tasks/' + task.id)
			.then(response => {
				context.commit('deleteTask', task);
			})
			.catch(error => {
				alert(error.response.data);
			});
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})