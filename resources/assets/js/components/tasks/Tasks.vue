<template>

	<div>
		<task-header @taskCreated="pushTaskToTasks">
		</task-header>
		
		<task-list :tasks="tasks" @taskDeleted="spliceTaskFromTasks">
			<template slot="title">All Tasks</template>
		</task-list>

		<task-list :tasks="incompleteTasks" @taskDeleted="spliceTaskFromTasks">
			<template slot="title">Incomplete Tasks</template>
		</task-list>

		<task-list :tasks="completeTasks" @taskDeleted="spliceTaskFromTasks">
			<template slot="title">Complete Tasks</template>
		</task-list>
	</div>

</template>

<script>
	import TaskHeader from './TaskHeader.vue';

	import TaskList from './TaskList.vue';


	export default {

		components: {
			TaskHeader, TaskList
		},

		data() {
			return {
				tasks: []
			}
		},

		created() {
			axios.get('/api/v1/tasks')
				.then(response => {
					this.tasks = response.data;
				})
				.catch(error => {
					alert(error.response.data);
				});
		},

		computed: {
			completeTasks() {
				return this.tasks.filter(task => task.complete);
			},
			incompleteTasks() {
				return this.tasks.filter(task => ! task.complete);
			}
		},

		methods: {
			pushTaskToTasks(task) {
				this.tasks.push(task);
			},

			spliceTaskFromTasks(index) {
				this.tasks.splice(index, 1);
			}
		}

	}
</script>