import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

let state = {
	tasks: []
};

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})