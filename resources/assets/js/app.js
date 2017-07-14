
import './bootstrap';
import Vue from 'vue';
import Tasks from './components/tasks/Tasks.vue';

const app = new Vue({
    el: '#app',

    components: {
    	Tasks
    }
});
