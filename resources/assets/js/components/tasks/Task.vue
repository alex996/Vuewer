<template>
	<li class="task">
		<input type="checkbox" v-model="task.complete" @click="updateTask">

		<span v-if="! editMode">
			<span ref="taskNameText">{{ task.name }}</span>

			<button class="button is-small is-info" @click="editModeActivated">
				<span class="icon is-small">
					<i class="fa fa-pencil" aria-hidden="true"></i>
				</span>
			</button>
		</span>
		<span v-else>
			<input class="input task-input" ref="taskNameInput"
					:value="task.name" :style="{ width: width }"
					@blur="editModeDectivated($event)"
					@keyup.enter="editModeDectivated($event)">

			<button class="button is-small is-primary">
				<span class="icon is-small">
					<i class="fa fa-check" aria-hidden="true"></i>
				</span>
			</button>
		</span>		

		<button class="button is-small is-danger" @click="daleteTask">
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
			editModeActivated() {
				// Calculate <input> size based on task name in <span> (+ some extra padding)
				this.width = this.$refs.taskNameText.offsetWidth + 12 + 'px';
				// Switch to edit mode
				this.editMode = true;

				// Vue uses async rendering, so the if-block will not be rendered immediately
				// (ref. https://vuejs.org/v2/guide/reactivity.html). To wait until the
				// <input> is available, we'll set a timeout and only then focus it.
				this.$nextTick(() =>
					this.$refs.taskNameInput.focus()
				);
			},

			editModeDectivated(event) {
				// Remember that v-model="task.name" is equivalent to :value="task.name" and
				// @input="task.name = event.target.value"? We don't want HTTP PUT to be
				// triggered on every keystroke, but only when you exit the edit mode.

				// Exit from edit mode
				this.editMode = false;

				// We'll update the task name only if it actually changed. This will also
				// prevent the HTTP PUT from being sent twice, once on the @blur event
				// and second on the @key presss (there could be a better way btw).
				let newName = event.target.value;
				if (this.task.name !== newName) {
					this.task.name = newName;
					this.updateTask();
				}
			},

			/**
			 * You can debate whether a task should be concerned with updating its
			 * state. We could instead issue an event and delegate to our shared
			 * store to update the task. This can be done more easily with Vuex
			 * (https://github.com/alex996/Vuewer/tree/vuex).
			 */
			updateTask() {
				axios.put('/api/v1/tasks/' + this.task.id, {
					name: this.task.name,
					complete: this.task.complete
				})
				.catch(error => {
					alert(error.response.data);
				});
			},

			daleteTask() {
				axios.delete('/api/v1/tasks/' + this.task.id)
					.then(response => {
						this.$emit('taskDeleted');
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