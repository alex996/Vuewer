<template>
	<section class="section task-list-section">
		<div class="container">
			<h1 class="title">
				<slot name="title"></slot>
			</h1>
			<ul class="task-list">
				<task v-for="(task, index) in taskList" :key="task.id" :data="task">	 
				</task>
			</ul>
		</div>
	</section>	
</template>

<script>
	import Task from './Task.vue';

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