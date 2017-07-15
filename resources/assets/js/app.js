
import './bootstrap';
import Vue from 'vue';
import Tasks from './components/tasks/Tasks.vue';

/**
 * This is where we instantiate Vue and our Tasks component, which
 * will display a header and three task lists. We'll render it with
 * <tasks></tasks> in our only front-end view - welcome.blade.php.
 */

const app = new Vue({
    el: '#app',

    components: {
    	Tasks
    }
});
