import axios from "axios"

const API_KEY = `7e686758a4d3b7474c9f411bf8d2151f`;
const BASE_URL = `https://api.themoviedb.org/3`;

export const getMovies = async (query) => {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
            api_key: API_KEY,
            query
        }
    });
    return response.data.results;
};


export const getMovie = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`,{
        params: {
            api_key: API_KEY
        }
    });
    return response;
}