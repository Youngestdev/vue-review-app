<template>
	<form v-on:submit.prevent="addNewComment(newReviewComment, rating, id + 1); newReviewComment = ''; rating = '';">
		<div class="form-row">
			<div class="col">
				<input class="form-control form-control-sm"
				v-model="newReviewComment"
				id="new-review"
				placeholder="Add a review">
			</div>
			<div class="col">
				<select v-model="rating" class="form-control form-control-sm">
					<option v-for="option in options" v-bind:value="option.value" v-bind:key="option.key">
						{{option.text}}
					</option>
				</select>
			</div>
			<div class="col">
				<button class="btn btn-primary">Add</button>
			</div>
		</div>
	</form>
</template>

<script>
	export default {
		data: () => ({
			id: 0,
			newReviewComment: '',
			rating: ''
		}),
		props: ['reviews', 'addNewComment', 'options']
	}
</script>