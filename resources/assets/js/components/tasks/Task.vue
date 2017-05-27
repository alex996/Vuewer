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
				this.width = this.$refs.taskNameText.offsetWidth + 12 + 'px'; // span width + padding
				this.editMode = true;

				this.$nextTick(() =>
					this.$refs.taskNameInput.focus() // focus the input
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

			nameInputBlurred() {
				this.editMode = false;

				this.taskUpdated();
			},

			completeCheckboxChanged() {
				this.taskUpdated();
			},

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