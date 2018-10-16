<template>
  <div class="container fluid" id="app">
    <div class="page-header">
        <h1>Dashboard</h1><hr>
    </div>
    <div class="row">
      <div class="col">
        Total Reviews: {{ reviews.length }}
      </div>
    <div class="col">
      Average Review: {{ getReviewsAverage }}
    </div>
    </div>

    <review-form />

    <div class="card">
      <div class="card-header">
        <h3>Reviews</h3>
      </div>
      <div class="card-body">
        <ul>
          <li class="list-group-item d-flex justify-content-between align-items-center"
          is="reviewitem" v-for="(review) in reviews"
          v-bind:key="review.id"
          v-bind:comment="review.comment"
          v-bind:rating="review.rating"></li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';
import reviewitem from './ReviewItem';
import ReviewForm from './ReviewForm';

export default {
	name: 'Reviews',
	components: {
		reviewitem,
		ReviewForm,
	},
	data: () => ({
		reviews: [],
	}),
	computed: {
		...mapGetters(['getReviews', 'getReviewsAverage', 'getOptions']),
	},
	methods: {
		...mapActions(['addReview']),
	},
	mounted() {
		this.reviews = this.getReviews;
	},
};
</script>
