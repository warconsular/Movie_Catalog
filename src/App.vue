<template>
  <div>
    <search-bar @search="searchMovies"></search-bar>
    <div v-if="!loading && movies.length === 0">No results found.</div>
    <div v-if="loading">Loading...</div>
    <div v-if="movies.length > 0">
      <movie-card v-for="movie in movies" :key="movie.id" :movie="movie">
      </movie-card>
    </div>
  </div>
</template>

<script>
import { getMovies } from './API';
import SearchBar from './components/Search_Bar.vue';
import MovieCard from './components/MovieCard.vue';

export default {
  components: {
    SearchBar,
    MovieCard
  },
  data() {
    return {
      movies: [],
      loading: false
    };
  },
  methods: {
    async searchMovies(query) {
      this.loading = true;
      this.movies = await getMovies(query);
      this.loading = false;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
