<template>
    <div class="search_bar">
        <input type="text" v-model="searchQuery" placeholder="Search...">
        <button @click="searchMovies">Search</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: ''
        };
    },
    methods: {
        searchMovies() {
            this.$emit('search', this.searchQuery);
        }
    }
};
</script>

<style>
    .search_bar {
        display: flex;
        margin-bottom: 20px;
    }

    input {
        flex: 1;
        padding: 10px;
        font-size: 16px;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #007bff;
        color: #fff;
        border: none;
        cursor: pointer;
    }
</style>