export default {

	loadTasks(context) {
		axios.get('/api/v1/tasks')
			.then(response => {
				context.commit('setTasks', response.data);
			})
			.catch(error => {
				alert(error.response.data);
			});		
	},

	createTask(context, task) {
		axios.post('/api/v1/tasks', task)
			.then(response => {
				context.commit('createTask', response.data);
			})
			.catch(error => {
				alert(error.response.data);
			});
	},

	updateTask(context, task) {
		axios.put('/api/v1/tasks/' + task.id, task)
			.then(response => {
				context.commit('updateTask', response.data);
			})
			.catch(error => {
				alert(error.response.data);
			});
	},

	deleteTask(context, task) {
		axios.delete('/api/v1/tasks/' + task.id)
			.then(response => {
				context.commit('deleteTask', task);
			})
			.catch(error => {
				alert(error.response.data);
			});
	}
}