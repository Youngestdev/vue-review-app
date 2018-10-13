<template>
  <div class="container fluid" id="app">
    <div class="page-header">
        <h1>Dashboard</h1><hr>
    </div>
    <div class="row">
      <div class="col">
        Total Reviews: {{reviews.length}}
      </div>
    <div class="col">
      Average Review: {{average() || 0}}
    </div>
    </div>

    <review-form
      :reviews="reviews"
      :rating="rating"
      :options="options"
      :addNewComment="addNewComment"
    />

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

import reviewitem from './ReviewItem';
import ReviewForm from './ReviewForm';

const reviewsAverage = [];

export default {
  name: 'Reviews',
  props: ['comment', 'rating'],
  components: {
    reviewitem,
    ReviewForm
  },
  data() {
    return {
      reviews: [],
      options: [{
        text: 1,
        value: 1,
      },
      {
        text: 2,
        value: 2,
      },
      {
        text: 3,
        value: 3,
      },
      {
        text: 4,
        value: 4,
      },
      {
        text: 5,
        value: 5,
      },
      ],
    };
  },
  methods: {
    addNewComment(id, comment, rating) {
      this.reviews.push({
        id,
        comment,
        rating,
      });
      reviewsAverage.push(rating);
    },
    average() {
      return reviewsAverage.reduce((a, b) => a + b, 0) / reviewsAverage.length;
    },
  },
};
</script>
