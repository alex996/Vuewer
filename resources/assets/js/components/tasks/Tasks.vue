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

		created() {
			this.$store.dispatch('loadTasks');
		},

		computed: {
			tasks() {
				return this.$store.getters.tasks;
			},
			completeTasks() {
				return this.$store.getters.completeTasks;
			},
			incompleteTasks() {
				return this.$store.getters.incompleteTasks;
			}
		}

	}
</script>