import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import mutations from './store/mutations'
import actions from './store/actions'

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

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})