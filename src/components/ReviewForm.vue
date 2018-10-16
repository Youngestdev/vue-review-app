<template>
	<form v-on:submit.prevent="handleSubmit">
		<div class="form-row">
			<div class="col">
				<input class="form-control form-control-sm"
				v-model="newReviewComment"
				id="new-review"
				placeholder="Add a review"
        required>
			</div>
			<div class="col">
				<select v-model="rating" class="form-control form-control-sm" required>
					<option v-for="option in getOptions" v-bind:value="option.value" v-bind:key="option.key">
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
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'ReviewForm',
	data: () => ({
		newReviewComment: '',
		rating: 0,
	}),
	computed: {
		...mapGetters(['getReviewsLength', 'getOptions']),
	},
	methods: {
		...mapActions(['addReview', 'addReviewAverage']),

		handleSubmit(e) {
			this.addReview({
				id: this.getReviewsLength + 1,
				comment: this.newReviewComment,
				rating: this.rating,
			});
			this.addReviewAverage(parseInt(this.rating));
			this.newReviewComment = '';
			this.rating = '';
		},
	},
};
</script>
