<template>
	<div class="task-header">
		<section class="hero task-header-hero">
			<div class="hero-body">
				<div class="container">
					<h1 class="title is-1 is-spaced">
						Vuewer
						<span class="is-pulled-right">
							<button class="button is-primary is-large" @click="toggleForm = ! toggleForm">
								<span class="icon is-medium">
									<i :class="{ 'fa': true, 'fa-plus': ! toggleForm, 'fa-minus': toggleForm }" aria-hidden="true"></i>
								</span>
							</button>
						</span>
					</h1>
					<h2 class="subtitle">
						Your perfect time management and goal setting assistant.
					</h2>
				</div>
			</div>
		</section>
		<section class="section task-header-form" v-show="toggleForm">
			<div class="container">
				<div class="columns">
					<div class="column is-4">
						<h1 class="title">Create a Task</h1>
						<form @submit.prevent="formSubmitted">
							<div class="field">
								<p class="control">
									<input class="input" placeholder="Name" v-model="name">
								</p>
							</div>
							<div class="field">
								<p class="control">
									<label class="checkbox">
										<input type="checkbox" v-model="complete"> Mark as <i>Complete</i>
									</label>
								</p>
							</div>
							<div class="field">
								<p class="control">
									<button type="submit" class="button is-primary">Create</button>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				toggleForm: false,
				name: '',
				complete: false
			}
		},

		methods: {
			formSubmitted() {
				console.log('submitted');
			}
		}

	}
</script>

<style>
	.task-header .task-header-hero button {
		border-radius: 50%;
	}
	.task-header .task-header-form {
		padding-top: 0;
	}
</style>