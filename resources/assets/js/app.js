import './bootstrap';
import Vue from 'vue';
import store from './store/store';
import Tasks from './components/tasks/Tasks.vue';

const app = new Vue({
    el: '#app',

    store,

    components: {
    	Tasks
    }
});
