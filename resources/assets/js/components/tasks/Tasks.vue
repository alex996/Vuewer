<template>

	<div>
		<task-header>
		</task-header>
		
		<task-list :tasks="tasks">
			<template slot="title">All Tasks</template>
		</task-list>

		<task-list :tasks="incompleteTasks">
			<template slot="title">Incomplete Tasks</template>
		</task-list>

		<task-list :tasks="completeTasks">
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
				return this.tasks.filter(task => task.complete);
			}
		}

	}
</script>