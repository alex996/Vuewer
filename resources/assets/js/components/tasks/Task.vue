<template>
	<li class="task">
		<input type="checkbox" v-model="task.complete" @change="completeCheckboxChanged">

		<span v-if="! editMode">
			<span ref="taskNameText">{{ task.name }}</span>

			<button class="button is-small is-info" @click="switchToEditMode">
				<span class="icon is-small">
					<i class="fa fa-pencil" aria-hidden="true"></i>
				</span>
			</button>
		</span>
		<span v-else>
			<input class="input task-input" v-model="task.name" ref="taskNameInput" @blur="nameInputBlurred" :style="{ width: width }">

			<button class="button is-small is-primary">
				<span class="icon is-small">
					<i class="fa fa-check" aria-hidden="true"></i>
				</span>
			</button>
		</span>		

		<button class="button is-small is-danger" @click="deleteBtnClicked">
			<span class="icon is-small">
				<i class="fa fa-times" aria-hidden="true"></i>
			</span>
		</button>
	</li>
</template>

<script>
	/**
	 * A single task is represented here as a row with a checkbox, text, and
	 * edit/delete buttons. When edited or deleted, the task notifies the
	 * API, and when deleted, it also notifies the Tasks parent.
	 */

	export default {

		data() {
			return {
				editMode: false,
				width: 0
			}
		},

		props: [
			'data'
		],

		computed: {
			task() {
				return this.data;
			}
		},

		methods: {
			switchToEditMode() {
				// Calculate <input> size based on task name in <span> (+ some extra padding)
				this.width = this.$refs.taskNameText.offsetWidth + 12 + 'px';
				this.editMode = true;

				// Make a timeout to give the DOM some time and then focus the <input>
				this.$nextTick(() =>
					this.$refs.taskNameInput.focus()
				);
			},

			deleteBtnClicked() {
				axios.delete('/api/v1/tasks/' + this.task.id)
					.then(response => {
						this.$emit('taskDeleted');
					})
					.catch(error => {
						alert(error.response.data);
					});
			},

			/**
			 * When we leave the input, we exist the edit mode. It's time
			 * to update the tasks with the API. Note that it'd be better
			 * to first check if the task name was actually modified.
			 */
			nameInputBlurred() {				
				this.editMode = false;

				this.taskUpdated();
			},

			completeCheckboxChanged() {
				this.taskUpdated();
			},

			/**
			 * You can debate whether a task should be concerned with updating its
			 * state. We could instead issue an event and delegate to our shared
			 * store to update the task. This would be easier with Vuex though.
			 */
			taskUpdated() {
				axios.put('/api/v1/tasks/' + this.task.id, {
					name: this.task.name,
					complete: this.task.complete
				})
				.catch(error => {
					alert(error.response.data);
				});
			}
		}

	}
</script>

<style>
	.task .task-input {
		padding: 0 5px;
		height: 1.7em;
	}
</style>