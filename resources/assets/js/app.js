
require('./bootstrap');

import Vue from 'vue';

window.Vue = Vue;

import Tasks from './components/tasks/Tasks.vue';


const app = new Vue({
    el: '#app',

    components: {
    	Tasks
    }
});
