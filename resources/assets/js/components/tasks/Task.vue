<template>
	<li class="task">
		<input type="checkbox" v-model="task.complete">

		<span v-if="! editMode">
			<span ref="text">{{ task.name }}</span>

			<button class="button is-small is-info" @click="switchToEditMode">
				<span class="icon is-small">
					<i class="fa fa-pencil" aria-hidden="true"></i>
				</span>
			</button>
		</span>
		<span v-else>
			<input class="input task-input" v-model="task.name" ref="name" @blur="editMode = false" :style="{ width: width }">

			<button class="button is-small is-primary">
				<span class="icon is-small">
					<i class="fa fa-check" aria-hidden="true"></i>
				</span>
			</button>
		</span>		

		<button class="button is-small is-danger">
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
				this.width = this.$refs.text.offsetWidth + 12 + 'px'; // span width + padding
				this.editMode = true;

				Vue.nextTick(() =>
					this.$refs.name.focus() // focus the input
				);
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