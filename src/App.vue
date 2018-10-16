<template>
  <div id="app">
    <Reviews />
  </div>
</template>

<script>
import Reviews from './components/Reviews';
import reviewitem from './components/ReviewItem';

export default {
	name: 'App',
	components: {
		Reviews,
		reviewitem,
	},
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
