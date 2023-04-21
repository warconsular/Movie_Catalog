<template>
    <div class="movie_card">
        <img src="" alt="image_for_card">
        <div class="movie_information">
            <h3>{{ movie_title }}</h3>
            <p>{{ movie_overview }}</p>
            <p>Release date: {{ movie.release_date }}</p>
            <p>Rate: {{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    computed: {
        posterUrl() {
            return '../assets/joker.jpeg' + this.movie.poster_path;
        }
    }
};

</script>

<style>
    .movie_card {
        display: flex;
        margin-bottom: 20px;
    }
    img {
        width: 200px;
        margin-right: 20px;
    }

    .movie_information {
        flex: 1;
    }
</style>