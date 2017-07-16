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

		<button class="button is-small is-danger" @click="deleteTask">
			<span class="icon is-small">
				<i class="fa fa-times" aria-hidden="true"></i>
			</span>
		</button>
	</li>
</template>

<script>
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

			deleteTask() {
				this.$store.dispatch('deleteTask', {
					id: this.task.id,
					name: this.task.name,
					complete: this.task.complete
				});				
			},

			updateTask() {
				this.$store.dispatch('updateTask', {
					id: this.task.id,
					name: this.task.name,
					complete: this.task.complete
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