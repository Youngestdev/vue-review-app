import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reviews: [],
    reviewsAverage: [],
    options: [
      {
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
  },
  getters: {
    getReviews: state => state.reviews,
    getReviewsLength: state => state.reviews.length,
    getReviewsAverage: (state) => {
      if (state.reviewsAverage.length !== 0) {
        return (state.reviewsAverage.reduce((a, b) => a + b, 0) / state.reviewsAverage.length).toFixed(1);
      }

      return 0;
    },
    getOptions: state => state.options,
  },
  mutations: {
    ADD_REVIEW: (state, payload) => state.reviews.push(payload),
    ADD_REVIEW_AVERAGE: (state, payload) => state.reviewsAverage.push(payload),
  },
  actions: {
    addReview: (context, payload) => {
      context.commit('ADD_REVIEW', payload);
    },
    addReviewAverage: (context, payload) => {
      context.commit('ADD_REVIEW_AVERAGE', payload);
    },
  },
});
