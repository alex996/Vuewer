<template>
	<section class="section task-list-section">
		<div class="container">
			<h1 class="title">
				<slot name="title"></slot>
			</h1>
			<ul class="task-list">
				<task v-for="(task, index) in taskList" :key="task.id" :data="task" @taskDeleted="$emit('taskDeleted', index)">	 
				</task>
			</ul>
		</div>
	</section>	
</template>

<script>
	import Task from './Task.vue';

	/**
	 * A simple reusable list of tasks. Pass in your tasks as a prop and
	 * it will display them in a dedicated section. Note that the list
	 * also propagates the 'taskDeleted' event up to the Tasks parent.
	 */

	export default {

		components: { Task },

		props: [
			'tasks'
		],

		computed: {
			taskList() {
				return this.tasks;
			}
		}

	}
</script>

<style>
	.task-list-section {
		padding-top: 0;
	}
	.task-list-section .task-list li {
		margin-bottom: 5px;
	}
	.task-list-section .task-list button {
		border-radius: 50%;
	}
</style>