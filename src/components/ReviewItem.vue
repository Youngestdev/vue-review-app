<template>
  <li>
    {{comment}}
    <span><StarRating
    v-model=rating
    :read-only=true
    :star-size=20
    :show-rating=false>
    </StarRating>
    </span>
  </li>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
	name: 'reviewitem',
	props: ['comment', 'rating'],
	components: {
		StarRating,
	},
};
</script>
