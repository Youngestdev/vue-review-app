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

    <form v-on:submit.prevent="addNewComment">
      <div class="form-row">
        <div class="col">
          <input class="form-control form-control-sm"
          v-model="newReviewComment"
          id="new-review"
          placeholder="Add a review">
        </div>
        <div class="col">
          <select v-model="selected" class="form-control form-control-sm">
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

const reviewsAverage = [];

export default {
  name: 'Reviews',
  props: ['comment', 'rating'],
  components: {
    reviewitem,
  },
  data() {
    return {
      newReviewComment: '',
      reviews: [],
      nextID: 0,
      selected: '',
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
    addNewComment() {
      this.reviews.push({
        id: this.nextID + 1,
        comment: this.newReviewComment,
        rating: this.selected,
      });
      reviewsAverage.push(this.selected);
      this.newReviewComment = '';
      this.selected = '';
    },
    average() {
      return reviewsAverage.reduce((a, b) => a + b, 0) / reviewsAverage.length;
    },
  },
};
</script>
